import React from "react";
import { useLoaderData, Link, MetaFunction } from "remix";
import slugify from "slugify";
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
  const [search, setSearch] = React.useState("");
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
          <div className="grid md:grid-cols-1 gap-8 grid-cols-1">
            {/* <input placeholder="Search articles" /> */}
            <div className="relative w-full mb-4">
              <input
                aria-label="Search articles"
                type="text"
                value={search}
                onChange={(event) => {
                  return setSearch(event.target.value);
                }}
                // bind:value={search}
                placeholder="Search articles"
                className="block w-full px-4 py-2 text-white bg-gray-800 border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 "
              />
              <svg
                className="absolute w-5 h-5 text-white right-3 top-3 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {blogs.posts
              .filter(
                (blog: Blog) =>
                  blog.title.toLowerCase().indexOf(search.toLowerCase()) > -1
              )
              .map((blog: Blog) => (
                // <>
                //   <h3 className="py-2 text-xl text-white">{blog.title}</h3>
                //   <p className="text-blueGray-500">{blog.number}</p>
                //   <p className="text-blueGray-500">{blog.createdAt}</p>
                //   <p className="text-blueGray-500">{console.log(blog.body)}</p>
                // </>
                <Link
                  className="cursor-pointer"
                  // to={blog.slug}
                  // to={`${blog.number}/${slugify(blog.title)}`}
                  // to={`${blog.milestone.title}`}
                  // to={`${blog.number}`}
                  to={`${slugify(blog.title.toLowerCase())}`}
                  // state={`${blog.number}`}
                  // to={`${slugify(blog.title)}`}
                  key={blog.number}
                  // rel="noreferrer"
                >
                  <div className="flex sm:pb-8 bg-gray-800 rounded-lg p-5 border-2 border-transparent transition duration-500 ease-in-out hover:border-yellow-500">
                    <div className="flex justify-between items-center w-full">
                      {/* <div className="w-full h-72 bg-gray-900 rounded-md flex justify-center	">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="rounded-md object-contain h-full max-h-96 object-center	"
                      />
                    </div> */}
                      <h3 className="py-2 text-xl text-white">{blog.title}</h3>
                      <div className="text-blueGray-500 inline-flex  items-center">
                        {blog.reactions.totalCount} ❤️
                        {"    "} {"    "}
                        <p className="w-32 text-left md:text-right">
                          {blog.createdAt.split("T")[0]}
                        </p>
                      </div>
                      {/* <p className="text-blueGray-500">{blog.brief}</p> */}
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
