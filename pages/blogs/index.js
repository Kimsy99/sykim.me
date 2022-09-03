import Head from "next/head";
import util from "../../styles/util.module.css";
import BlogTile from "../../components/tiles/blogTile";
const { Client } = require("@notionhq/client");
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Settings from "../../components/settings.component";
import { getPosts, getSortedPostsData } from "../../lib/posts";

export default function Talent({ list }) {
  const description =
    "Incredible design talent that I’ve collaborated with or keeping an eye on. The list focuses on ICs and agencies with public bodies of work. It excludes influencial leaders and talented ICs (many I personally know) that kept their work private.";

  //filtering logic depends on query params
  //if no query we assume the section is "recently added" and fav setting is "false"
  //if you toggle section or fav setting, the changed setting will be reflected in param
  //removing filter param triggers all and "overview"
  const router = useRouter();
  const [filter, setFilter] = React.useState(null);
  const [fav, setFav] = React.useState(null);
  const [currentList, setCurrentList] = React.useState(null);

  useEffect(() => {
    let thisPage = document.querySelector("#blogPage");
    let top = sessionStorage.getItem("talent-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("talent-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  //logic should remember filter, fav setting, and it's very own scroll pos

  const filters = ["Product", "Life", "Crypto", "Design", "Random"];

  //handlers to handle filter and fav setting changes
  function removeFilter() {
    setFilter("all");
  }
  function handleTagChange(e) {
    setFilter(e.target.innerHTML);
  }

  //set initial states when url has queries
  useEffect(() => {
    if (router.query.filter && router.query.filter !== filter) {
      setFilter(router.query.filter);
    }
  }, [router.query.filter]);
  useEffect(() => {
    if (router.query.favonly) {
      if (fav !== true) {
        setFav(true);
      }
    } else {
      setFav(false);
    }
  }, [router.query.favonly]);
  //set initial state when url has no queries
  useEffect(() => {
    //preset filter when there's no filter in url, but data stored in local storage
    if (router && router.query.filter == null) {
      let filterSelected = sessionStorage.getItem("talent-filter");
      if (filterSelected && filterSelected !== filter) {
        setFilter(filterSelected);
      } else {
        setFilter("all");
      }
    }
    //set fav when no filter in url, but in the same session
    if (router && router.query.favonly == null) {
      let favSelected = sessionStorage.getItem("talent-fav");
      if (favSelected == "true") {
        setFav(true);
      } else {
        setFav(false);
      }
    }
  }, []);

  useEffect(() => {
    if (filter && fav !== null) {
      //cycle through scenarios and compose lists
      let tempList = [];
      if (filter !== "all" && !fav) {
        router.push({
          query: { filter: filter },
        });
        sessionStorage.setItem("talent-filter", filter);
        sessionStorage.setItem("talent-fav", false);
        for (var i = 0; i < list.length; i++) {
          for (
            var j = 0;
            // j < list[i].properties.Tags.multi_select.length;
            j < list[i].frontmatter.labels.length;
            j++
          ) {
            if (
              list[i].frontmatter.labels[j] ==
              filter.replace("&amp;", "&")
              // list[i].frontmatter.labels ==
              // filter.replace("&amp;", "&")
            ) {
              tempList.push(list[i]);
            }
          }
        }
      } else if (filter !== "all" && fav) {
        router.push({
          query: { filter: filter, favonly: fav },
        });
        sessionStorage.setItem("talent-filter", filter);
        sessionStorage.setItem("talent-fav", true);
        // console.log("testsss: ", list[i].frontmatter.labels)
        for (var i = 0; i < list.length; i++) {
          for (
            var j = 0;
            j < list[i].frontmatter.labels.length;
            j++
          ) {
            if (
              list[i].frontmatter.labels[j] ==
                filter.replace("&amp;", "&") &&
              list[i].frontmatter.fav == fav
            ) {
              tempList.push(list[i]);
            }
          }
        }
      } else if (filter == "all" && fav) {
        router.push({
          query: { favonly: fav },
        });
        sessionStorage.setItem("talent-filter", "all");
        sessionStorage.setItem("talent-fav", true);
        for (var i = 0; i < list.length; i++) {
          if (list[i].frontmatter.fav == fav) {
            tempList.push(list[i]);
          }
        }
      } else if (filter == "all" && !fav) {
        router.push({
          query: {},
        });
        sessionStorage.setItem("talent-filter", "all");
        sessionStorage.setItem("talent-fav", false);
        for (var i = 0; i < list.length; i++) {
          tempList.push(list[i]);
        }
      }
      setCurrentList(tempList);

    }
  }, [filter, fav]);

  return (
    <>
      <Head>
        <title>{"Kim's Writings"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />{" "}
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>
      {/* <Script
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
      </Script> */}

      <main className={util.page} id="blogPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Writings</h1>
          <p className={util.description}>{description}</p>

          <ul className={util.list}>
            <div className={util.tabBar}>
              <div className={util.flexRow}>
                <button
                  onClick={removeFilter}
                  className={util.tab}
                  role="tab"
                  aria-selected={filter == "all" ? "true" : null}
                >
                  All
                </button>
                {filters.map((filterName) => (
                  <button
                    key={filterName}
                    onClick={handleTagChange}
                    className={util.tab}
                    role="tab"
                    aria-selected={
                      filter
                        ? filterName == filter.replace("&amp;", "&")
                          ? "true"
                          : null
                        : null
                    }
                  >
                    {filterName}
                  </button>
                ))}
              </div>
              <Settings status={fav} updateCheckbox={setFav} />
            </div>

            {currentList ? (
              currentList.length == 0 ? (
                <div className={util.emptyState}>
                  Nothing found. Please try adjusting the filter.
                </div>
              ) : (
                currentList.map((link, id) => (
                  <BlogTile
                    key={id}
                    title={link.title}
                    // url={`/blogs/${link.properties.Slug.rich_text[0].plain_text}`}
                    url={`/blogs/${link.frontmatter.slug}`}
                    date={link.createdAt.toString()}
                    fav={link.frontmatter.fav}
                    tags={link.frontmatter.labels}
                    desc={"test"}
                    // notableUrl={
                    //   link.properties.NotableUrl.url == null
                    //     ? null
                    //     : link.properties.NotableUrl.url
                    // }
                    // notableTitle={
                    //   link.properties.NotableTitle.rich_text[0] == undefined
                    //     ? null
                    //     : link.properties.NotableTitle.rich_text[0].plain_text
                    // }
                  />
                  // <BlogTile
                  //   key={link.id}
                  //   title={link.properties.Name.title[0].plain_text}
                  //   // url={`/blogs/${link.properties.Slug.rich_text[0].plain_text}`}
                  //   url={`/blogs/${link.id}`}
                  //   date={link.properties.Time.date.start}
                  //   fav={link.properties.Fav.checkbox}
                  //   tags={link.properties.Tags.multi_select}
                  //   desc={link.properties.Description.rich_text[0].plain_text}
                  //   // notableUrl={
                  //   //   link.properties.NotableUrl.url == null
                  //   //     ? null
                  //   //     : link.properties.NotableUrl.url
                  //   // }
                  //   // notableTitle={
                  //   //   link.properties.NotableTitle.rich_text[0] == undefined
                  //   //     ? null
                  //   //     : link.properties.NotableTitle.rich_text[0].plain_text
                  //   // }
                  // />
                ))
              )
            ) : (
              <p>loading...</p>
            )}
          </ul>
        </div>
      </main>
    </>
  );
}

//notion API
export async function getServerSideProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  // console.log("getPosts: ", await getPosts()) 
  const res = (await getPosts())
  // let temp123 = (await getPosts()).posts[0].frontmatter
  // console.log("res: ", res)
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOGS_ID,
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
      // list: response.results,
      list: JSON.parse(JSON.stringify(res.posts)),
    },
    revalidate: 60,
  };
}
