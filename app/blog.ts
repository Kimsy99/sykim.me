import path from "path";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";
import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import {graphql} from "@octokit/graphql";
import slugify from "slugify";

const TOKEN = process.env.TOKEN;
export type Blog = {
  _id: string;
  title: string;
  number: number;
  createdAt: any;
  body: string;
  reactions: {
    totalCount: number
  }
  frontmatter: {
    title: string;
    description: string;
    date: any;
    slug: string;
  }
};

export type PostMarkdownAttributes = {
  title: string;
};

let blogsPath = path.join(__dirname, "../blogs");

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title;
}
// console.log(TOKEN)
const client = new ApolloClient({
  uri: "https://api.hashnode.com/",
  cache: new InMemoryCache(),
});
const request = graphql.defaults({
  headers: {
    authorization: `token ${TOKEN}`,
  },
})
export async function getPosts() {
  
  const data: any = await request(`{
      repository(name: "sykim.me", owner: "Kimsy99") {
        issues(first: 50,filterBy: { labels:  ["published"]},orderBy: {field: UPDATED_AT, direction: DESC}) {
          nodes {
            title
            number
            createdAt
            body
            url
            reactions{
              totalCount
            }
          }
        }
      }
    }
    `)
    // console.log("body-frontmatter: ", parseFrontMatter(data.repository.issues.nodes[0].body))
  const posts = data.repository.issues.nodes.map(
    (post: any) => {return {...post, frontmatter: parseFrontMatter(post.body).attributes, body: parseFrontMatter(post.body).body}}
  ).sort((a: any, b: any) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date))
  return {posts}
}

export async function getPost(slug: string) {
  console.log("slug: ", slug)
  const issueID: number = parseInt(slug);
  let posts: any = await graphql(`{
    repository(name: "sykim.me", owner: "Kimsy99") {
      issues(first: 50) {
        nodes{
          title
          number
          createdAt
          bodyHTML
          body
          url
          reactions{
            totalCount
          }
          labels(first:10){
            nodes{
              name
            }
          }
          comments(first: 50) {
            nodes{
              author{
                avatarUrl
                login
              }
              createdAt
              body
              authorAssociation 
              url
            }
          }
        }
      }
    }
  }
  `, {headers: {
    authorization: `token ${TOKEN}`,
  },}
  )
  // parseFrontMatter(issue.body).attributes.slug
  posts = posts.repository.issues.nodes.map(
    (post: any) => {return {...post, frontmatter: parseFrontMatter(post.body).attributes, body: parseFrontMatter(post.body).body}}
  )
  console.log(posts[0])
  const issue = posts.filter((issue: any) => issue.frontmatter.slug == slug)[0]
  let html = marked(issue.body)
  return {
    slug: issue.frontmatter.slug, 
    html, 
    title:issue.title,
    date: issue.createdAt,
    comments: issue.comments.nodes,
    reactionCount: issue.reactions.totalCount,
    url: issue.url,
    labels: issue.labels.nodes.filter((node: {name: string}) => node.name !== "published"),
    frontmatter: issue.frontmatter
  }
}
