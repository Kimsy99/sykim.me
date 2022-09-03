
import parseFrontMatter from "front-matter";
import { marked } from "marked";
import {graphql} from "@octokit/graphql";

// const postsDirectory = path.join(process.cwd(), "posts");

// export function getSortedPostsData() {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, "");

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     };
//   });
//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// }

// export async function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   };
// }
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
  let html = marked(issue.body)
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