import path from "path";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";
import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import {graphql} from "@octokit/graphql";
import slugify from "slugify";

const TOKEN = process.env.TOKEN;
// console.log(TOKEN)
export type Blog = {
  _id: string;
  title: string;
  markdown: string;
  dateAdded: any;
  coverImage: string;
  slug: string;
  totalReactions: string;
  brief: string;
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
  
  // const { data } = await client.query({
  //   query: gql`
  //     query GetPosts {
  //       user(username: "kimsy99") {
  //         publication {
  //           posts(page: 0) {
  //             _id
  //             coverImage
  //             slug
  //             title
  //             dateAdded
  //             brief
  //             totalReactions
  //           }
  //         }
  //       }
  //     }
  //   `,
  // });
  const data: any = await request(`{
      repository(name: "sykim.me", owner: "Kimsy99") {
        issues(first: 50) {
          nodes {
            title
            number
            createdAt
            bodyHTML
            body
            url
            reactions{
              totalCount
            }
            milestone{
              title
            }
          }
        }
      }
    }
    `)
    // reactions
  console.log(data)
  return {posts: data.repository.issues.nodes}
}
const GET_BLOG_POST =gql`
  query GetPosts($slug: String!) {
    post(
      hostname: "kimsy99"
      slug: $slug
    ) {
      title
      slug
      cuid
      coverImage
      contentMarkdown
      dateAdded
      tags{
        slug
      }
    }
  }
`
export async function getPost(slug: string) {
  // const { data } = await client.query({
  //   query: GET_BLOG_POST,
  //   variables:{slug}
  // });
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

  // const data: any = await graphql(`query($number: Int!){
  //   repository(name: "sykim.me", owner: "Kimsy99") {
  //     issue(number: $number) {
  //         title
  //         number
  //         createdAt
  //         bodyHTML
  //         body
  //         url
  //         reactions{
  //           totalCount
  //         }
  //         comments(first: 50) {
  //           nodes{
  //             author{
  //               avatarUrl
  //               login
  //             }
  //             createdAt
  //             body
  //             authorAssociation 
  //             url
  //           }
  //         }
  //       }
  //   }
  // }
  // `, {number: Number(1),headers: {
  //   authorization: `token ${TOKEN}`,
  // },}
  // )
  let html = marked(issue.body)
  return {
    slug: issue.number, 
    // tags: data.post.tags.map(tag => tag.slug),
    html, 
    // coverImage:data.post.coverImage, 
    title:issue.title,
    date: issue.createdAt,
    comments: issue.comments.nodes,
    reactionCount: issue.reactions.totalCount,
    url: issue.url
  }
}
// const data: any = await graphql(`query($number: Int!){
//   repository(name: "sykim.me", owner: "Kimsy99") {
//     issue(number: $number) {
//         title
//         number
//         createdAt
//         bodyHTML
//         body
//         url
//         reactions{
//           totalCount
//         }
//         comments(first: 50) {
//           nodes{
//             author{
//               avatarUrl
//               login
//             }
//             createdAt
//             body
//             authorAssociation 
//             url
//           }
//         }
//       }
//   }
// }