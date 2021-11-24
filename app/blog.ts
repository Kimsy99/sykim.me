import path from "path";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";
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
      contentMarkdown
      dateAdded
      tags{
        slug
      }
    }
  }
`
export async function getPost(slug: string) {
  const { data } = await client.query({
    query: GET_BLOG_POST,
    variables:{slug}
  });
  let html = marked(data.post.contentMarkdown)
  // console.log(data.post)
  return {
    slug: data.post.slug, 
    tags: data.post.tags.map(tag => tag.slug),
    html, 
    coverImage:data.post.coverImage, 
    title:data.post.title,
    date: data.post.dateAdded
  }
}
