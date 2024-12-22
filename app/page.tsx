import Image from "next/image";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <h1>Hi, I'm Kim</h1>
      <p>I'm a Product Manager based in Kuala Lumpur, Malaysia. Currently working in the cryptocurrency/blockchain industry. Outside of work, I write code and explore the world of blockchain and cryptocurrencies.</p>
      <ul>
        <li>
          <a href="https://github.com/sykim">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/sykim">Twitter</a>
        </li>
      </ul>
    </div>
  );
}
