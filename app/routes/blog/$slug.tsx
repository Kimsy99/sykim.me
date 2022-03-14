import React from "react";
import { Link, LinksFunction, MetaFunction, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getPost } from "~/blog";
import proseStyles from "./styles/prose.css";
import { getSocialMetas } from "../../../utils/seo";
import { marked } from "marked";
import formatDistance from "date-fns/formatDistance/index.js";
import { Label } from "./types";
// export let links: LinksFunction = () => {
//   return [];
// };
export let loader: LoaderFunction = async (props: any) => {
  return getPost(props.params.slug);
};
export let meta: MetaFunction = ({ data }: { data: any }) => {
  return {
    ...getSocialMetas({
      title: data.title,
      description: data.frontmatter.description,
      keywords:
        data.frontmatter.slug.split("-").join(", ") +
        ", blog, writing, sheng yong, kim, Kim, Sheng Yong",
      url: `https://sykim.me/${data.frontmatter.slug}`,
    }),
  };
};
const BlogSlug = () => {
  let blog = useLoaderData();
  return (
    <div className="max-w-screen-lg mx-auto px-5 px-10vw">
      <div className="flex flex-col col-span-full space-y-2 lg:justify-between mb-10 mt-20 ">
        <h2 className="leading-tight text-3xl md:text-4xl text-white ">
          {blog.title}
        </h2>
        <h2 className="leading-tight text-xl md:text-xl text-blueGray-500 pt-4">
          {blog.date.split("T")[0]}
        </h2>
        {blog?.labels.length != 0 && (
          <div className="flex flex-wrap w-12/12 pt-4 gap-y-4 gap-x-4">
            {blog.labels.map((label: Label) => (
              <span className="bg-gray-800 rounded-lg px-4 py-2 text-center text-blueGray-500 mr-4">
                #{label.name}
              </span>
            ))}
          </div>
        )}
      </div>
      <hr className="border-gray-600" />
      <div
        className="prose prose-dark max-w-screen-lg my-10 text-blueGray-500 mx-auto "
        dangerouslySetInnerHTML={{ __html: blog.html }}
      ></div>
      <div className="prose prose-dark max-w-screen-lg my-20 text-blueGray-500 mx-auto">
        <div className="flex flex-wrap justify-between">
          <span>
            Reactions: {blog.reactionCount}
            {"  "}
            ❤️
          </span>
          <span>
            <a href={blog.url}>View on Github</a>
          </span>
        </div>
        <hr />
        <div className="flex flex-row flex-wrap gap-2 col-span-full justify-between items-center">
          <h2 style={{ marginTop: "2.5rem" }}>Comments</h2>
          <a
            href={`${blog.url}#issuecomment-new`}
            rel="external"
            target="_blank"
          >
            Leave a new comment!
          </a>
        </div>
        {blog.comments.length != 0 ? (
          blog.comments.map((idx: number, comment: any) => {
            return (
              <div className="border-2 border-blueGray-500 p-8 pb-0" key={idx}>
                <div
                  className="prose prose-dark max-w-screen-lg text-blueGray-500 mx-auto"
                  dangerouslySetInnerHTML={{ __html: marked(comment.body) }}
                ></div>
                <div className="min-w-[8rem] pt-4 text-xs flex flex-row-reverse items-center">
                  <img
                    className="w-8 h-8 rounded-full ml-4"
                    alt={`avatar of commenter ${comment.author.login}`}
                    src={comment.author.avatarUrl}
                  />
                  <div
                    className="flex flex-col"
                    class:text-green-600={comment.authorAssociation === "OWNER"}
                  >
                    <a
                      href={comment.url}
                      className="no-underline"
                      rel="external"
                      target="_blank"
                    >
                      <time>
                        {formatDistance(
                          new Date(comment.createdAt),
                          new Date()
                        )}{" "}
                        ago
                        {/* {comment.createdAt} */}
                      </time>
                    </a>
                    {comment.author.login}
                  </div>
                </div>
                <br />
              </div>
            );
          })
        ) : (
          <p>No Comments Now</p>
        )}
      </div>
    </div>
  );
};

export default BlogSlug;
