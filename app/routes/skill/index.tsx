import React from "react";
import { MetaFunction } from "remix";
import { getSocialMetas } from "../../../utils/seo";
export let meta: MetaFunction = () => {
  return {
    ...getSocialMetas({
      title: "Skills - Kim Sheng Yong",
      description: "Know more about what Kim's skills and abilities.",
      keywords: "skill, skills, sheng yong, kim, Kim, Sheng Yong",
      url: "https://sykim.me/skill",
    }),
  };
};
const SkillsPage = () => {
  return (
    <div className="max-w-screen-lg  mx-auto  px-5">
      <div className="flex flex-col col-span-full space-y-2 lg:justify-between my-20">
        <h1 className="leading-tight text-3xl md:text-4xl text-white ">
          My Skills
        </h1>
        <h2 className="leading-tight text-3xl md:text-4xl text-blueGray-500">
          Basically.. what i can do.
        </h2>
      </div>

      <div className="bullet-dark text-blueGray-500 lg:grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="mt-20 mb-10 text-2xl font-semibold text-white">
            Works
          </h3>
          <ul>
            <li>Product Management</li>
            <li>Web Development (Full-stack)</li>
            <li>Mobile App Developement</li>
            <li>Data Science and Machine Learning</li>
          </ul>
        </div>
        <div>
          <h3 className="mt-20 mb-10 text-2xl font-semibold text-white">
            Programming Languages
          </h3>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>C++</li>
            <li>C#</li>
            <li>SQL</li>
            <li>Java</li>
            <li>Kotlin</li>
            <li>Rust</li>
            <li>Ruby</li>
            <li>Solidity</li>
            <li>Dart</li>
            <li>Swift</li>
          </ul>
        </div>
        <div>
          <h3 className="mt-20 mb-10 text-2xl font-semibold text-white">
            Frameworks
          </h3>
          <ul>
            <li>ReactJS</li>
            <li>Web3 - React</li>
            <li>React Native</li>
            <li>NextJS</li>
            <li>GatsbyJS</li>
            <li>VueJS</li>
            <li>NodeJS</li>
            <li>ASP.net</li>
            <li>.NET Framework</li>
            <li>ExpressJS</li>
            <li>Flutter</li>
            <li>TensorFlow</li>
            <li>Jetpack Compose (Android - Kotlin)</li>
            <li>Solana - Anchor</li>
          </ul>
        </div>
        <div>
          <h3 className="mt-20 mb-10 text-2xl font-semibold text-white">
            Databases, Cloud and Tools
          </h3>
          <ul>
            <li>Mixpanel</li>
            <li>Docker</li>
            <li>Git</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>SQLite</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>Hadoop</li>
            <li>Airflow</li>
            <li>Google Cloud Platform</li>
            <li>AWS</li>
            <li>Digital Ocean</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
