import React from "react";
import { LinksFunction, MetaFunction, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getPost } from "~/blog";
import proseStyles from "./styles/prose.css";
import { getSocialMetas } from "../../../utils/seo";
// export let links: LinksFunction = () => {
//   return [];
// };
export let loader: LoaderFunction = async ({ params }: any) => {
  // invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
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
    <div className="max-w-screen-lg mx-auto px-5">
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
      <div className="flex flex-col col-span-full space-y-2 lg:justify-between my-20">
        <h2 className="leading-tight text-3xl md:text-4xl text-white ">
          {blog.title}
        </h2>
        <h2 className="leading-tight text-xl md:text-xl text-blueGray-500 pt-4">
          {blog.date.split("T")[0]}
        </h2>
        <div className="flex flex-wrap w-12/12 pt-4 gap-y-4 gap-x-4">
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
        />
      </div>
      <div
        className="prose prose-dark max-w-screen-lg my-20 text-blueGray-500 mx-auto "
        dangerouslySetInnerHTML={{ __html: blog.html }}
      ></div>
    </div>
  );
};

export default BlogSlug;
