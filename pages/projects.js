import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import ProjectTile from "../components/tiles/projectTile";
import { useRouter } from "next/router";
import Script from "next/script";

export default function Projects() {
  useEffect(() => {
    let thisPage = document.querySelector("#projectsPage");
    let top = sessionStorage.getItem("projects-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("projects-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  //page header and in-page description
  const description = "Projects/Products I worked on for the past years. ";

  return (
    <>
      <Head>
        <title>{"Kim's Projects"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />{" "}
        <meta property="og:image" content="https://www.sykim.me/og/index.png" />
      </Head>

      <main id="projectsPage" className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>Projects</h1>
          <p className={util.description}>
          Projects/Products I worked on for the past years. 
          </p>
          <ul className={util.list}>
            <ProjectTile
              image="coingecko"
              title="CoinGecko"
              content={
                "I worked as a Associate Product Manager at CoinGecko. Mostly working on CoinGecko.com, which is our main product."
              }
              type="Product · Full-time"
              date="2022-6-27"
              url={"https://www.coingecko.com/"}
            />
            <ProjectTile
              image="monsta-infinite"
              title="Monsta Infinite"
              content={
                "Monsta Infinite is an NFT breeding, battle, and building game that falls under the rapidly growing 'play-to-earn' and GameFi sector on the Binance Smart Chain. I am responsible in building the Monsta Marketplace and also Monsta Wallet which are used by more than 100,000 users. Technologies: ReactJS Web3, Typescript, GraphQL, Metamask, Solidity."
              }
              type="Web3 Software Engineer · Contract"
              date="2022-2-1"
            />
            <ProjectTile
              image="getdwa"
              title="Digital Workspace Assistant"
              content={
                "Develop and maintain Digital Workspace Assistant that allow user to access workspace through chat based application. Integrated system with Telegram API for users to interact with the system through Telegram Bots. Developed a Role based System for authorization in the system and involved in integrating 'Flow Builder', which is the main core logic for the product. Technologies: Typescript, MongoDB, ExpressJS, ReactJS, NodeJS, Redux, React-testing-library, Mocha, Chai, Jenkins."
              }
              type="Web · Intern"
              date="2022-2-1"
              url={"https://getdwa.com/"}
            />
            <ProjectTile
              title="Second-hand Car Management System"
              content={
                "Develop and maintain document management system for clients which is a second-hand car retail company to manage their stocks, sales efficiently. Technologies: ReactJS, Redux, Firebase, SCSS, ChartJS, Git"
              }
              type="Web · Freelance"
              date="2022-2-1"
            />
            <ProjectTile
              image="dsckitahack"
              title="DSC Malaysia - DSC Kita Hack 2021 Landing Page"
              content={
                "Landing Page of DSC Malaysia for DSC Kita Hack hackathon to display event, registration details and more."
              }
              type="Web · Volunteer"
              date="2022-2-1"
            />
            <ProjectTile
              image="dacn"
              title="Data Analytics Consultancy Network Landing Page"
              content={
                "Landing Page of Data Analytics Consultancy Network which is a non profit organization that help local businesses enhance business performance through the use of data analytics through recruiting student consultants."
              }
              type="Web · Volunteer"
              date="2022-2-1"
            />
          </ul>
          <p
            className={util.tileContent}
            style={{ marginTop: "6rem", textAlign: "center" }}
          >
            {"To be done soon."}
          </p>
        </div>
      </main>
    </>
  );
}
