import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import util from "../styles/util.module.css";
import ContactContent from "../components/contactContent.component";
import ExpTile from "../components/tiles/expTile";
import Script from "next/script";
import { marked } from "marked";
import { aboutContent } from "../markdown/about.md"
// const aboutContent = require("../markdown/about.md")

export default function About({ content }) {
  useEffect(() => {
    let thisPage = document.querySelector("#aboutPage");
    let top = sessionStorage.getItem("about-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("about-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);
  const description =
    "A summary of me, my interests, my career, and why/how this site was built.";
  return (
    <>
      <Head>
        <title>Kim · About</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />{" "}
        <meta property="og:image" content="https://www.sykim.me/og/index.png" />
      </Head>
      <main className={util.page} id="aboutPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>About</h1>
          <div className={util.inset}>
            <p className={util.description}>{description}</p>
            <div className={util.divider}></div>
            <div className={util.read} dangerouslySetInnerHTML={{ __html: content }}>
            </div>

            <div>
              <ExpTile
                date="2022–Now"
                title="Product at CoinGecko"
                url={"https://coingecko.com"}
                content={"Building products @CoinGecko 💪"}
              />
              <ExpTile
                date="2020-22"
                title="Freelance/Contract/Part-time Developer"
                // url={"https://zumper.com"}
                content={
                  "During my studies at Xiamen University Malaysia, I started doing some side gigs as a Full-stack Software Developer. Mainly coding in Typescript, Javascript, ReactJS, NodeJS, Django."
                }
              />
              <ExpTile
                date="2018–22"
                title="Software Engineering Major Student at Xiamen University Malaysia (XMUM)"
                url={"https://www.xmu.edu.my/"}
                content={
                  "Studing Software Engineering in XMUM. In university, I founded XMUM Tech Club and Google Developer Student Club to build up tech community in my university."
                }
              />
              <ExpTile
                date="2021"
                title="Product Engineer Intern at Tinkerve LLP"
                url={"https://tinkerve.com"}
                content={`Doing some stuff there. Mainly <a href="https://getdwa.com/" target="_blank" rel="noopener noreferrer">Digital Workspace Assistant</a>.`}
              />

            </div>
            <div className={util.read}>
              <h2>This Site</h2>

              <p>
                This site was initially built in Sep 2022 over 1/2 weekends. Forked from <a
                  href="https://www.sj.land/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.normalLink}
                >
                  sj.land
                </a> and inspired by <a
                  href="https://rauno.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.normalLink}
                >
                  rauno.me
                </a>

              </p>

              <p>
                This site is built with{" "}
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.normalLink}
                >
                  Next.js
                </a>{" "}
                and deployed on{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.externalLink}
                >
                  Vercel
                </a>
                . Content (expect blogs) is managed in{" "}
                <a
                  href="http://notion.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.normalLink}
                >
                  Notion
                </a>{" "}
                and statically pre-rendered through{" "}
                <a
                  href="https://developers.notion.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.externalLink}
                >
                  Notion API
                </a>
                . When new discoveries are added on the go, content is{" "}
                <a
                  href="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.normalLink}
                >
                  regenerated
                </a>{" "}
                at server-side on demand, without manual redeployment.{" "}
                Blog posts are written in GitHub Issue as CMS for hosting blog content. Blog posts content are loaded to /blogs at server-side using Github <a
                  href="https://docs.github.com/en/graphql"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.externalLink}
                >GraphQL API</a>.
                <a
                  href="https://www.radix-ui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.externalLink}
                >
                  Radix UI
                </a>{" "}
                is used for front-end components like modals and tooltips.{" "}
                <a
                  href="https://github.com/pacocoursey/next-themes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.externalLink}
                >
                  Next Themes
                </a>{" "}
                made light/dark-mode management easy.
              </p>
              <h2 style={{ margin: "4rem 0rem -0.5rem 0rem" }}>Contact</h2>
            </div>
            <div className={util.inset}>
              <ContactContent inModal="false" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export async function getStaticProps() {
  const content = await import(`../markdown/about.md`)
  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => href.includes("http") ? `<a target="_blank" rel="noopener noreferrer" href="${href}"">${text}</a>` : `<a href="${href}">${text}</a>`;
  return {
    props: {
      content: marked(content.default, { renderer })
    }
  };
}

