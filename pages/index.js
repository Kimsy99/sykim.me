import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import Tile from "../components/tiles/tile.component";
const { Client } = require("@notionhq/client");
import ReadingListTile from "../components/tiles/readingListTile";
import BlogTile from "../components/tiles/blogTile";
import { getPosts } from "../lib/posts";

export default function Home({ list,favArticles,latestBlogs }) {
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
      </Head>{" "}
      <main className={util.page} id="recentsPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Hi, I am Kim</h1>
          <p className={util.description}>{description}</p>
          <div className={util.divider}></div>
          <div className={util.spaceBetween}>
            <h2 className={util.headerSecondary}>My Favourite Reads</h2>
            <Link href="/reading-list"><a className={util.externalLink + " " + util.description}>Read More</a></Link>
          </div>
          <div>
          {favArticles ? (
              favArticles.length == 0 ? (
                <div className={util.emptyState}>
                  Nothing found. Please try adjusting the filter.
                </div>
              ) : (
                favArticles.map((link) => (
                  <ReadingListTile
                    key={link.id}
                    title={link.properties.Name.title[0].plain_text}
                    url={link.properties.URL.url}
                    date={link.properties.Time.date.start}
                    // date={link.created_time}
                    fav={link.properties.Fav.checkbox}
                    tags={link.properties.Tags.multi_select}
                  />
                ))
              )
            ) : (
              <p>loading...</p>
            )}
            {/* {list.map((item) => (
              <Tile
                key={item.id}
                // internalUrl={item.properties.Path.url}
                // logoUrl={item.properties.Logo.files[0].file.url}
                // logoUrl={
                //   "https://static.coingecko.com/s/coingecko-logo-white-ea42ded10e4d106e14227d48ea6140dc32214230aa82ef63d0499f9c1e109656.png"
                // }
                title={item.properties.Name.title[0].plain_text}
                content={item.properties.Body.rich_text[0].plain_text}
                url={item.properties.URL.url}
                date={item.properties.Time.date.start}
                tags={item.properties.Tags.multi_select}
              />
            ))} */}
          </div>
          <div className={util.spaceBetween}>
            <h2 className={util.headerSecondary}>My Latest Writings</h2>
            <Link href="/blogs"><a className={util.externalLink + " " + util.description}>Read More</a></Link>
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
                    desc={"test"}
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

  const favArticles = await notion.databases.query({
    database_id: process.env.NOTION_READINGLIST_ID,
    filter: {
      and: [
        {
          property: "Display",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "Fav",
          checkbox: {
            equals: true,
          },
        }
      ],
    },
    sorts: [
      {
        property: "Time",
        direction: "descending",
      },
    ],
  });
  const latestBlogs = (await getPosts())
  return {
    props: {
      list: response.results,
      favArticles: favArticles.results,
      latestBlogs: JSON.parse(JSON.stringify(latestBlogs.posts.slice(0,3)))
    },
    revalidate: 60,
  };
}
