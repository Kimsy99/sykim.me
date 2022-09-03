import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import Tile from "../components/tiles/tile.component";
const { Client } = require("@notionhq/client");
import Script from "next/script";

export default function Home({ list }) {
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
    "I’m a product manager and developer by training and trade. I spend most of my spare time reading about product, software and crypto. If this combination interests you, welcome to my corner of the internet. This is where I share my reading list, investment updates, and software adventures.";

  return (
    <>
      <Head>
        <title>Kim · Home</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" type="image/gif" />
      </Head>{" "}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T2CWC86NTK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <main className={util.page} id="recentsPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Hi, I am Kim</h1>
          <p className={util.description}>{description}</p>
          <ul className={util.list}>
            {/* {console.log("list: ", list)} */}
            {list.map((item) => (
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
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

//notion API
export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  console.log("notion: ", notion);
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

  return {
    props: {
      list: response.results,
    },
    revalidate: 60,
  };
}
