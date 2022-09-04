
import parseFrontMatter from "front-matter";
import { marked } from "marked";
import {graphql} from "@octokit/graphql";

const TOKEN = process.env.TOKEN;
const request = graphql.defaults({
  headers: {
    authorization: `token ${TOKEN}`,
  },
})
export async function getPosts() {
  
  const data = await request(`{
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
    (post) => {return {...post, frontmatter: parseFrontMatter(post.body).attributes, body: parseFrontMatter(post.body).body}}
  ).sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date))
  return {posts}
}


export async function getPost(slug) {
  const issueID = parseInt(slug);
  let posts = await graphql(`{
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
    (post) => {return {...post, frontmatter: parseFrontMatter(post.body).attributes, body: parseFrontMatter(post.body).body}}
  )
  const issue = posts.filter((issue) => issue.frontmatter.slug == slug)[0]
  // let html = marked(issue.body)
  const renderer = new marked.Renderer();
  renderer.link = ( href, title, text ) => `<a target="_blank" rel="noopener noreferrer" href="${ href }"">${ text }</a>`;
  let html = marked(issue.body, { renderer })
  return {
    slug: issue.frontmatter.slug, 
    html, 
    title:issue.title,
    date: issue.createdAt,
    comments: issue.comments.nodes,
    reactionCount: issue.reactions.totalCount,
    url: issue.url,
    labels: issue.labels.nodes.filter((node) => node.name !== "published"),
    frontmatter: issue.frontmatter
  }
}