import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import { getSocialMetas } from "../../utils/seo";
import { what_i_do } from "../../data/what-i-do.js";
import SkillCard from "~/components/SkillCard";
import { motion, useReducedMotion } from "framer-motion";

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data = what_i_do;

  // https://remix.run/api/remix#json
  return data;
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    ...getSocialMetas({
      keywords:
        "Kim Sheng Yong, XMUM, Xiamen University Malaysia, XMUM, XMUM Tech Club, Student Developer, Kim, Sheng Yong",
      url: "https://sykim.me",
    }),
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<any>();
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="max-w-screen-lg  mx-auto">
      <main className="mx-auto px-5 ">
        <div className="relative h-hero min-h-full grid md:grid-cols-2 gap-8 grid-cols-1 justify-center place-content-center -mt-20">
          <div className="w-full object-cover md:w-12/12 w-9/12 mx-auto ">
            <motion.img
              src="/img/kim-profile.png"
              alt="My Profile Picture"
              height={480}
              width={665}
              initial={{ scale: shouldReduceMotion ? 1 : 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.75 }}
            />
          </div>
          <motion.div
            initial="initial"
            animate="visible"
            variants={{
              initial: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="md:self-center "
          >
            <motion.div variants={childVariants}>
              <h1 className="text-center md:text-left leading-tight text-3xl md:text-3xl text-white md:self-center ">
                I am <span className="underline-yellow">Kim</span>, a student
                developer, community builder and digital product enthusiats.
              </h1>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex flex-col col-span-full space-y-2 lg:justify-between ">
          <h1 className="leading-tight text-3xl md:text-4xl text-white ">
            Who am I?
          </h1>
          <h2 className="leading-tight text-3xl md:text-4xl text-blueGray-500">
            Let me introduce myself a little bit...
          </h2>
        </div>
        <br />
        <div className="about">
          <p className="leading-8 text-lg text-blueGray-500">
            I am <span className="underline-yellow">Kim Sheng Yong</span>, Final
            year SWE student from Xiamen University Malaysia. Founder and
            Ex-Lead of XMUM Tech Club. In my free time, I love to explore
            technologies and particularly now, I am interested in Crypto and
            Blockchain.
          </p>
          <br />
          <p className="leading-8 text-lg text-blueGray-500">
            I work professionally as a contract/part-time full-stack developer
            (recently to Web3) during my studies, which leads me to have some
            experience in developing web/app applications. (See my works{" "}
            <Link to="/work">here</Link>)
          </p>
          <br />
          <p className="leading-8 text-lg text-blueGray-500">
            I am open for any work and collaboration. You have have a look on my{" "}
            <Link to="https://drive.google.com/file/d/1QZkScXsqgIHEOsbt2uyFaDZfgpbgx4_l/view?usp=sharing">
              resume
            </Link>{" "}
            and also you may find me on{" "}
            <a
              href="https://github.com/Kimsy99"
              target="_blank"
              rel="noreferrer"
            >
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
            . Or you can drop me an email through{" "}
            <u>kimshengyong [at] gmail [dot] com</u>.
          </p>
          <br />
          <p className="leading-8 text-lg text-blueGray-500">
            Get to know more about me <Link to="/about">here</Link>!
          </p>
        </div>
        <div className="h-48 lg:h-56" />
        <div className="flex flex-col col-span-full space-y-2 lg:justify-between ">
          <h1 className="leading-tight text-3xl md:text-4xl text-white ">
            What I do?
          </h1>
          <h2 className="leading-tight text-3xl md:text-4xl text-blueGray-500">
            What i do for living/fun
          </h2>
        </div>
        <div className="grid gap-x-4 grid-cols-4 md:grid-cols-4 lg:gap-x-6 lg:grid-cols-12 mx-auto gap-10 mt-5">
          {data.map((stuff, index) => (
            <SkillCard
              key={index}
              title={stuff.title}
              description={stuff.description}
              href={stuff.href}
              icon={stuff.icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
