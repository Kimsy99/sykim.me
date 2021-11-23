import React from "react";
import { useLoaderData, Link, MetaFunction } from "remix";
import { Blog, getPosts } from "~/blog";
import { getSocialMetas } from "../../../utils/seo";

export let loader = () => {
  return getPosts();
};
export let meta: MetaFunction = () => {
  return {
    ...getSocialMetas({
      title: "Blogs by Kim Sheng Yong",
      description: "Know more about what Kim's writings.",
      keywords: "blog, writing, sheng yong, kim, Kim, Sheng Yong",
      url: "https://sykim.me/blog",
    }),
  };
};
const Blogs = () => {
  let blogs = useLoaderData();
  console.log("blogs: ", blogs);
  return (
    <div className="max-w-screen-lg  mx-auto  px-5">
      {/* <Head>
      <title>Blogs by Kim Sheng Yong</title>
      <meta
        name="description"
        content="Know more about what Kim's writings."
      />
      <meta property="og:title" content={`Blogs - Kim Sheng Yong`} />
      <meta name="image" content="/img/kim-profile.png" />
      <meta name="og:image" content="/img/kim-profile.png" />
      <meta
        property="og:description"
        content={`Know more about what Kim's writings.`}
      />
      <meta property="og:url" content={`https://sykim.me/blog`} />
      <meta property="og:type" content="website" />
    </Head> */}
      <div className="flex flex-col col-span-full space-y-2 lg:justify-between my-20">
        <h2 className="leading-tight text-3xl md:text-4xl text-white ">
          My Writings
        </h2>
        <h2 className="leading-tight text-3xl md:text-4xl text-blueGray-500">
          My thoughts, experience and anything else
        </h2>
      </div>

      <div>
        <div className="py-8">
          <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
            {blogs.posts.map((blog: Blog) => (
              <Link
                className="cursor-pointer"
                to={blog.slug}
                key={blog._id}
                // rel="noreferrer"
              >
                <div className="flex sm:pb-8 text-center bg-gray-800 rounded-lg p-5 border-2 border-transparent transition duration-500 ease-in-out hover:border-yellow-500">
                  <div>
                    <div className="w-full h-72 bg-gray-900 rounded-md flex justify-center	">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="rounded-md object-contain h-full max-h-96 object-center	"
                      />
                    </div>
                    <h3 className="py-2 text-xl text-white">{blog.title}</h3>
                    <p className="text-white">
                      {blog.dateAdded.split("T")[0]}
                      {"    "} — {"    "}
                      {blog.totalReactions} ❤️
                    </p>
                    <p className="text-blueGray-500">{blog.brief}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
