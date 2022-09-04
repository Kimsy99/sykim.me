import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import util from "../styles/util.module.css";
import ContactContent from "../components/contactContent.component";
import ExpTile from "../components/tiles/expTile";
import Script from "next/script";
import { marked } from "marked";
import {aboutContent} from "../markdown/about.md"
// const aboutContent = require("../markdown/about.md")

export default function About({content}) {
  console.log("content: ", content)
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
  // let [ content, setContent] = useState("");
  // static async loadGetInitialProps
  // const aboutContent = require("../markdown/about.md")
  // useEffect(()=> {
  //   fetch(aboutContent)
  //     .then((res) => {
  //       console.log("res: ",res)
  //       return res.text()})
  //     .then((md) => {
  //      let mdToHTML = marked(md)
  //      console.log("content:", mdToHTML)
  //       setContent(mdToHTML)
  //     })
  // }, [])
  const description =
    "A summary of me, my interests, my design career, and why/how this site was built.";
  return (
    <>
      <Head>
        <title>Kim · About</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />{" "}
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>
      <main className={util.page} id="aboutPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>About</h1>
          <div className={util.inset}>
            <p className={util.description}>{description}</p>
            <div className={util.divider}></div>
            <div className={util.read} dangerouslySetInnerHTML={{__html: content}}>
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
            {/* <div className={util.read}>
              <h2>This Site</h2>

              <p>
                This site was initially built in Apr 2022 over 2 weekends. I
                built it for 2 reasons:
              </p>
              <ol
                type="1"
                start="1"
                style={{ padding: "0rem 0rem 0rem 1.25rem" }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  Keep myself accountable with my investments and learnings.
                  Sharing these in public gives me another level of rigor.
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Keep myself engaged with the latest stacks. Iterating on my
                  personal site gives me an opportunity to try new libraries and
                  frameworks.
                </li>
              </ol>

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
                . Content is managed in{" "}
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
            </div> */}
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
  renderer.link = ( href, title, text ) => href.includes("http") ? `<a target="_blank" rel="noopener noreferrer" href="${ href }"">${ text }</a>` : `<a href="${ href }">${ text }</a>`;
  return {
    props: {
      // list: response.results,
      content: marked(content.default, {renderer})
    }
  };
}

