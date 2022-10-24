import styles from ".//tile.module.css";
import util from "../../styles/util.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Tile({
  internalUrl,
  logoUrl,
  title,
  content,
  tags,
  date,
  url,
}) {
  return (
    <div className={styles.container}>
   

      <div className={styles.right}>
        <div className={styles.stack}>
          {url.includes("http") ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.titleLink}
            >
              <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
              <span className={styles.externalIcon}>↗</span>
            </a>
          ) : (
            <Link href={url}>
              <a className={styles.titleLink}>
                <h3 className={util.tileTitle + " " + styles.inline}>
                  {title}
                </h3>
                <span className={styles.externalIcon}>→</span>
              </a>
            </Link>
          )}
          <p className={util.tileContent}>{content}</p>
          <div className={util.tags + " " + util.flexRow}></div>
        </div>
        <p className={styles.date}>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
        </p>
      </div>
    </div>
  );
}
