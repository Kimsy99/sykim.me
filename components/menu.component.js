import styles from "../components/menu.module.css";
import { ThemeChanger } from "./theme.module";
import Link from "next/link";
import NavLink from "./navLink.component";
import Contact from "./contact.component";
import Image from "next/image";
import util from "../styles/util.module.css";

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <Link href="/">
          <img  src="/logo/kim.svg" style={{height: "2.5rem"}}/>
        </Link>
        <nav className={styles.nav}>
          <NavLink svg="recents" href="/" label="Home" shortcut="1" />
          <NavLink svg="about" href="/about" label="About" shortcut="2" />
          <NavLink
            svg="projects"
            href="/projects"
            label="Projects"
            shortcut="3"
          />
          <p className={styles.divider}>Resources</p>
          <NavLink
            svg="newsletters"
            href="/blogs"
            label="Writings"
            shortcut="4"
          />
          <NavLink
            svg="reading"
            href="/reading-list"
            label="Reading List"
            shortcut="5"
          />
          {/* <NavLink
            svg="reading"
            href="/reading-list"
            label="Reading List"
            shortcut="5"
          />
          <NavLink svg="users" href="/talent" label="Talent" shortcut="6" /> */}
          {/* <NavLink
            svg="newsletters"
            href="/newsletters"
            label="Newsletters"
            shortcut="7"
          /> */}
          {/* <NavLink
            svg="podcasts"
            href="/podcasts"
            label="Podcasts"
            shortcut="8"
          /> */}
          <p className={styles.divider}>Stay in touch</p>
          <Contact svg="chat" label="Contact" shortcut="6" />
          <NavLink
            svg="twitter"
            href="https://twitter.com/sykim_99"
            label="Twitter"
            external="true"
          />
        </nav>
      </div>
      <ThemeChanger />
    </div>
  );
}
