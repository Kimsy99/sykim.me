import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { processMarkdown } from "@ryanflorence/md";
import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";

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

const client = new ApolloClient({
  uri: "https://api.hashnode.com/",
  cache: new InMemoryCache(),
});
export async function getPosts() {

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        user(username: "kimsy99") {
          publication {
            posts(page: 0) {
              _id
              coverImage
              slug
              title
              dateAdded
              brief
              totalReactions
            }
          }
        }
      }
    `,
  });

  return {posts: data.user.publication.posts}
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
      content
      dateAdded
    }
  }
`
export async function getPost(slug: string) {
  // const client = new ApolloClient({
  //   uri: "https://api.hashnode.com/",
  //   cache: new InMemoryCache(),
  // });
  const { data } = await client.query({
    query: GET_BLOG_POST,
    variables:{slug}
  });
  console.log("data: ", data)
  return {slug: data.post.slug, html:data.post.content, coverImage:data.post.coverImage, title:data.post.title,date: data.post.dateAdded}
  // let filepath = path.join(blogsPath, slug + ".md");
  // let file = await fs.readFile(filepath);
  // let { attributes, body } = parseFrontMatter(file.toString());
  // invariant(
  //   isValidPostAttributes(attributes),
  //   `Blog ${filepath} is missing attributes`
  // );
	// let html = await processMarkdown(body);
  // return { slug, html, title: attributes.title };
}
export async function createPost(blog: Blog) {
  let md = `---\ntitle: ${blog.title}\n---\n\n${blog.markdown}`;
  await fs.writeFile(
    path.join(blogsPath, blog.slug + ".md"),
    md
  );
  return getPost(blog.slug);
}