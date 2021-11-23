import React from "react";
import { MetaFunction } from "remix";
import { projects, works } from "../../../data/works.js";
import { getSocialMetas } from "../../../utils/seo.js";
import WorkCard from "../../components/WorkCards";
// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    ...getSocialMetas({
      title: "Works by Kim Sheng Yong",
      description: "Know more about what Kim's works and projects.",
      keywords: "works, sheng yong, kim, Kim, Sheng Yong",
      url: "https://sykim.me/work",
    }),
  };
};
const Works = () => {
  return (
    <div className="max-w-screen-lg  mx-auto  px-5">
      {/* <Head>
        <title>Works by Kim Sheng Yong</title>
        <meta
          name="description"
          content="Know more about what Kim's works and projects."
        />
        <meta
          property="og:title"
          content={`Works & Projects - Kim Sheng Yong`}
        />
        <meta name="image" content="/img/kim-profile.png" />
        <meta name="og:image" content="/img/kim-profile.png" />
        <meta
          property="og:description"
          content={`Know more about what Kim's works and projects.`}
        />
        <meta property="og:url" content={`https://sykim.me/work`} />
        <meta property="og:type" content="website" />
      </Head> */}
      <div className="flex flex-col col-span-full space-y-2 lg:justify-between my-20">
        <h2 className="leading-tight text-3xl md:text-4xl text-white ">
          My Works & Projects
        </h2>
        <h2 className="leading-tight text-3xl md:text-4xl text-blueGray-500">
          What i do for living and fun (sometimes)
        </h2>
      </div>

      <div>
        <h2 className="mt-20 mb-10 text-2xl font-semibold text-white">Works</h2>
        <WorkCard posts={works} />
      </div>
      <div>
        <h2 className="mt-20 mb-10 text-2xl font-semibold text-white">
          Projects
        </h2>
        <WorkCard posts={projects} />
      </div>
      <p className="text-center text-3xl text-white my-10">
        Full list will be updated soon...
      </p>
    </div>
  );
};

export default Works;
