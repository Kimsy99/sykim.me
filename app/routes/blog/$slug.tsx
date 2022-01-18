import React from "react";
import { Link, LinksFunction, MetaFunction, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getPost } from "~/blog";
import proseStyles from "./styles/prose.css";
import { getSocialMetas } from "../../../utils/seo";
import { marked } from "marked";
import formatDistance from "date-fns/formatDistance/index.js";
// export let links: LinksFunction = () => {
//   return [];
// };
export let loader: LoaderFunction = async (props: any) => {
  // invariant(params.slug, "expected params.slug");
  const { request, params } = props;
  // console.log("request: ", request);
  console.log("props: ", props.params);
  return getPost(props.params.slug);
};

const BlogSlug = () => {
  let blog = useLoaderData();
  // return (
  //   <div>
  //     <h1>{blog.title}</h1>
  //   </div>
  // );
  return (
    // <div dangerouslySetInnerHTML={{ __html: blog.html }} className="prose">
    <div className="max-w-screen-lg mx-auto px-5 px-10vw">
      <head>
        <title>{blog.title}</title>
        <meta property="og:title" content={blog.title} />
        <meta name="image" content="https://www.sykim.me/img/kim-profile.png" />
        <meta
          name="og:image"
          content="https://www.sykim.me/img/kim-profile.png"
        />
        <meta
          property="og:url"
          content={`https://sykim.me/blog/${blog.slug}`}
        />
        <meta property="og:type" content="website" />
      </head>
      <div className="flex flex-col col-span-full space-y-2 lg:justify-between mb-10 mt-20 ">
        <h2 className="leading-tight text-3xl md:text-4xl text-white ">
          {blog.title}
        </h2>
        <h2 className="leading-tight text-xl md:text-xl text-blueGray-500 pt-4">
          {blog.date.split("T")[0]}
        </h2>
        {/* <div className="flex flex-wrap w-12/12 pt-4 gap-y-4 gap-x-4">
          {blog.tags.map((tag: string) => (
            <span className="bg-gray-800 rounded-lg px-4 py-2 text-center text-blueGray-500 mr-4">
              #{tag}
            </span>
          ))}
        </div>
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-12/12 mx-auto pt-4"
        /> */}
      </div>
      <hr className="border-gray-600" />
      <div
        className="prose prose-dark max-w-screen-lg my-20 text-blueGray-500 mx-auto "
        dangerouslySetInnerHTML={{ __html: blog.html }}
      ></div>
      <div className="prose prose-dark max-w-screen-lg my-20 text-blueGray-500 mx-auto">
        <div className="flex justify-between">
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
        <h2>Comments</h2>
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
                  {/* <Reactions
                    ghMetadata={{
                      issueUrl: comment.issue_url,
                      reactions: comment.reactions,
                    }}
                  /> */}
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
