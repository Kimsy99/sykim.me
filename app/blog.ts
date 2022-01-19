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
        issues(first: 50,orderBy: {field: UPDATED_AT, direction: DESC}) {
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
  console.log(data.repository.issues.nodes[0])
  return {posts: data.repository.issues.nodes}
}

export async function getPost(slug: string) {
  console.log("slug: ", slug)
  const issueID: number = parseInt(slug);
  const datas: any = await graphql(`{
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
  const issue = datas.repository.issues.nodes.filter((issue: any) => slugify(issue.title.toLowerCase()) == slug)[0]
  console.log("issues: ", datas)
  console.log("issue: ", issue)
  let html = marked(issue.body)
  return {
    slug: issue.number, 
    html, 
    title:issue.title,
    date: issue.createdAt,
    comments: issue.comments.nodes,
    reactionCount: issue.reactions.totalCount,
    url: issue.url,
    labels: issue.labels.nodes
  }
}
