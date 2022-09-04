import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../../lib/notion";
import Link from "next/link";

// import styles from "./post.module.css";
import util from "../../styles/util.module.css";
import { getPost } from "../../lib/posts";

export const Text = ({ text, id }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={id}
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderNestedList = (block) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
  }
  return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];
  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.rich_text} id={id} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.rich_text} id={id} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.rich_text} id={id} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.rich_text} id={id} />
        </h3>
      );
    case "bulleted_list_item":
      return (
        <li>
          <Text text={value.rich_text} id={id} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.rich_text} id={id} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.rich_text} id={id} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.rich_text} id={id} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <img className={util.imageBg} src={src} alt={caption} width="100%" />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case "code":
      return (
        <pre>
          <code key={id}>{value.rich_text[0].plain_text}</code>
        </pre>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url;
      return (
        <a href={href} target="_brank">
          {href}
        </a>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function Post({ post }) {
  if (!post) {
    return <div />;
  }
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>
            {post.title}
          </h1>
          <div className={util.tags + " " + util.flexRow}>
            {post.frontmatter.labels && (
              <span className={util.tagsLabel}>Tags:</span>
            )}
            {post.frontmatter.labels
              ? post.frontmatter.labels.map((tag) => (
                  <p
                    key={tag}
                    className={"redTag tag"}
                  >
                    {tag}
                  </p>
                ))
              : null}
          </div>
          <div className={util.divider}></div>
          <section className={util.read}>
            {/* {blocks.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))} */}
            <div
              className={util.read}
              dangerouslySetInnerHTML={{ __html: post.html }}
            ></div>
            {/* <Link href="/">
            <a className={styles.back}>← Go home</a>
          </Link> */}
          </section>
        </div>
      </article>
    </div>
  );
}

export const getStaticPaths = async () => {
  const databaseId = process.env.NOTION_BLOGS_ID;
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({
      params: {
        id: page.id,
        slug: page.properties.Slug.rich_text[0].plain_text,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  // console.log("id: ", id);
  // const page = await getPage(id);
  // const blocks = await getBlocks(id);
  const post = await getPost(id)

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  // const childBlocks = await Promise.all(
  //   blocks
  //     .filter((block) => block.has_children)
  //     .map(async (block) => {
  //       return {
  //         id: block.id,
  //         children: await getBlocks(block.id),
  //       };
  //     })
  // );
  // const blocksWithChildren = blocks.map((block) => {
  //   // Add child blocks if the block should contain children but none exists
  //   if (block.has_children && !block[block.type].children) {
  //     block[block.type]["children"] = childBlocks.find(
  //       (x) => x.id === block.id
  //     )?.children;
  //   }
  //   return block;
  // });

  return {
    props: {
      // page,
      // blocks: blocksWithChildren,
      post: JSON.parse(JSON.stringify(post))
    },
    revalidate: 1,
  };
};
