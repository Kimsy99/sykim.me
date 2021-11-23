import React from "react";
import { Link, MetaFunction } from "remix";
import { getSocialMetas } from "../../../utils/seo";

export let meta: MetaFunction = () => {
  return {
    ...getSocialMetas({
      title: "About Kim Sheng Yong",
      description: "Get to know about Kim Sheng Yong.",
      keywords: "about, sheng yong, kim, Kim, Sheng Yong",
      url: "https://sykim.me/about",
    }),
  };
};
const About = () => {
  return (
    <div className="max-w-screen-lg my-20 text-blueGray-500 mx-auto about px-10vw">
      {/* <Head>
        <title>About Kim Sheng Yong</title>
        <meta name="description" content="Get to know Kim Sheng Yong" />
        <meta property="og:title" content={`About Me - Kim Sheng Yong`} />
        <meta
          property="og:description"
          content={`Get to know about Kim Sheng Yong`}
        />
        <meta name="image" content="/img/kim-profile.png" />
        <meta name="og:image" content="/img/kim-profile.png" />
        <meta property="og:url" content={`https://sykim.me/about`} />
        <meta property="og:type" content="website" />
      </Head> */}
      <h1 className="text-2xl  text-white">
        Hey, I am <span className="underline-yellow">Kim Sheng Yong</span>
      </h1>
      <p className="leading-7">
        I am a student developer, community builder,
        freelance/contract/part-time developer and now, crypto & blockchain
        enthusiasts 😂. This page describe some of my background, interests and
        more to let you know more about me!
      </p>
      <div>
        <h2 className="mt-20 mb-10 text-2xl font-semibold text-white">
          Background
        </h2>
        <p className="leading-7">
          I was born in 1999 and grew up in Melaka, Malaysia. Currently a final
          year software engineering major student in{" "}
          <a href="http://www.xmu.edu.my/">Xiamen University Malaysia</a>{" "}
          graduating around Jun 2022.
        </p>
      </div>
      <div id="university">
        <h2 className="mt-20 mb-10 text-2xl font-semibold text-white">
          University
        </h2>
        <p className="leading-7">
          In university, I founded and lead{" "}
          <a href="https://www.facebook.com/xmumtechclub/">XMUM Tech Club</a>{" "}
          and{" "}
          <a href="https://gdsc.community.dev/xiamen-university-malaysia-campus/">
            Google Developer Student Club XMUM
          </a>
          . I wish to let students to explore different fields in the tech
          industry rather than only learning through universities lectures. So
          that student can be more industry prepared when graduate.
        </p>
      </div>
      <div>
        <h2 className="mt-20 mb-10 text-2xl font-semibold text-white">
          Outside of classes..
        </h2>
        <p className="leading-7">
          Other than a student, I also worked as Freelance/Contract Software
          Engineer. I had 1+ year of working professionally building Web and
          Mobile Applications, and recently get into working in blockchain and
          NFTs. You can view my work and experience <Link to="/work">here</Link>
          .
        </p>
      </div>
      <div>
        <h2 className="mt-20 mb-10 text-2xl font-semibold text-white">
          What I&apos;m interested
        </h2>
        <p className="leading-7">
          My main interest are in Product Management and Software Engineering, I
          love working on digital products. I am interested to work on Fintech,
          as it carries my passion in tech and finance.
        </p>
      </div>
      <div>
        <h2 className="mt-20 mb-10 text-2xl font-semibold text-white">
          What I&apos;m Learning
        </h2>
        <p className="leading-7">
          Recently, I had been actively learning about the Cryptocurrency and
          Blockchain field. I am learning DeFi, NFT, Web3, Solidity and more!!!
          The crypto field is so wide and interesting!! I believe decentralized
          could lead the world a better place. WAGMI!!
        </p>
      </div>
      <div>
        <h2 className="mt-20 mb-10 text-2xl font-semibold text-white">
          Collaborations / Works / Career Opportunities?
        </h2>
        <p className="leading-7">
          If you are like to give collaborate/hire me/give me any career
          opportunity, I am definitely welcome for it.
        </p>
        <br />
        <p className="leading-7">
          My major interest is in Fintech especially the Crypto, DeFi, NFTs and
          Blockchain industry. The roles I am interested is mainly Product
          Manager or Software Engineer.
        </p>
        <br />
        <p className="leading-7">
          If you are interested in hire me as Intern / Full time / Part Time /
          Freelance / Contract, do contact me through{" "}
          <u>kimshengyong [at] gmail [dot] com</u> .
        </p>
      </div>
      <div>
        <h2 className="mt-20 mb-10 text-2xl font-semibold text-white">
          Where to find me?
        </h2>
        <p className="leading-7">
          Find me on{" "}
          <a href="https://github.com/Kimsy99" target="_blank" rel="noreferrer">
            Github
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/kimsy99/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          , and{" "}
          <a
            href="https://twitter.com/kimsyyy99"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
