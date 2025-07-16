import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import Tile from "../components/tiles/tile.component";
const { Client } = require("@notionhq/client");
import ReadingListTile from "../components/tiles/readingListTile";
import BlogTile from "../components/tiles/blogTile";
import { getPosts } from "../lib/posts";

export default function Home({ latestBlogs }) {
  useEffect(() => {
    let thisPage = document.querySelector("#recentsPage");
    let top = sessionStorage.getItem("recents-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("recents-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  const description =
    "I’m a product manager and developer by training and trade. I spend most of my spare time reading about product, software and crypto. If this combination interests you, welcome to my corner of the internet. This is where I share my reading list, writings, and software adventures.";

  return (
    <>
      <Head>
        <title>Kim · Home</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" type="image/gif" />
        <meta property="og:image" content="https://www.sykim.me/og/index.png" />
      </Head>{" "}
      <main className={util.page} id="recentsPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Hi, I am Kim</h1>
          <p className={util.description}>{description}</p>
          <div className={util.divider}></div>

          <div className={util.spaceBetween}>
            <h2 className={util.headerSecondary}>Latest Writings</h2>
            <Link href="/blogs"><a className={util.internalLink + " " + util.description}>Read More →</a></Link>
          </div>
          <div>
            {latestBlogs ? (
              latestBlogs.length == 0 ? (
                <div className={util.emptyState}>
                  Nothing found. Please try adjusting the filter.
                </div>
              ) : (
                latestBlogs.map((link, id) => (
                  <BlogTile
                    key={id}
                    title={link.title}
                    // url={`/blogs/${link.properties.Slug.rich_text[0].plain_text}`}
                    url={`/blogs/${link.frontmatter.slug}`}
                    date={link.createdAt.toString()}
                    fav={link.frontmatter.fav}
                    tags={link.frontmatter.labels}
                    desc={link.frontmatter.description}
                  />
                ))
              )
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

//notion API
export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_RECENTS_ID,
    filter: {
      and: [
        {
          property: "Display",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Time",
        direction: "descending",
      },
    ],
  });

  // const favArticles = await notion.databases.query({
  //   database_id: process.env.NOTION_READINGLIST_ID,
  //   filter: {
  //     and: [
  //       {
  //         property: "Display",
  //         checkbox: {
  //           equals: true,
  //         },
  //       },
  //       {
  //         property: "Fav",
  //         checkbox: {
  //           equals: true,
  //         },
  //       }
  //     ],
  //   },
  //   sorts: [
  //     {
  //       property: "Time",
  //       direction: "descending",
  //     },
  //   ],
  // });
  const latestBlogs = (await getPosts())
  return {
    props: {
      latestBlogs: JSON.parse(JSON.stringify(latestBlogs.posts.slice(0, 3)))
    },
    revalidate: 60,
  };
}
