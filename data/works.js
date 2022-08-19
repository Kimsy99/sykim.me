const projects = [
  {
    url: "/img/works/personal-website.png",
    name: "Personal Website",
    description:
      "V2 of my personal website (Revamp from previous design - which are quite ugly). This website shows all my personal information, interest, skills, blog post and more. Technologies: (v1: ReactJS, Gatsby, Styled Component), (v2: ReactJS, NextJS, Typescript, TailwindCSS)",
  },
  {
    url: "/img/works/food-near-me.png",
    name: "Food-Near-Me - Yelp Clone",
    description:
      "Food-Near-Me is a project that help you to find restaurants near you. As users, you are able to review restaurants as well. There are list and map view to show of the restaurants near you. Technologies: React, React Native, Android, IOS, Firebase, Expo, React Native Reanimated, Styled Components, React Native Maps.",
  },
  {
    url: "/img/works/wave-portal.png",
    name: "Wave Portal - Ethereum Smart Contract",
    description:
      "Wave portal is a smart contract that allow people to connect their wallet and say hi to me!! (And also will randomly give away free ETH). Technologies: ReactJS, React Web3, Solidity, Hardhat, Ethereum, Ethereum Waffle. ",
  },
  {
    url: "/img/works/nft-portal.png",
    name: "GIF Portal - Solana Smart Contract",
    description:
      "GIF portal is a smart contract that allow people to connect their wallet and share their favourite GIF in Solana Blockchain Network. Technologies: ReactJS, Web3.js, Rust, Anchor, Solana, Phantom wallet. ",
  },
  {
    url: "/img/works/x-rate.png",
    name: "X-rate - University Service Application",
    description:
      "X-rate is a Web Application that allow university students to rate lecturers and classes. It is able to help student to make better decision in selecting lecturers and classes (in prototype phase). Technologies: ReactJS, NextJS, NodeJS, ExpressJS, Firebase.",
  },
  {
    url: "/img/works/library-management-system.png",
    name: "Library Management System",
    description:
      "A Library Mobile Application that allow borrowing and returning books remotely. Technologies: Android, Java, Gradle, SQlite",
  },
  {
    url: "/img/works/i-water.jpeg",
    name: "i-Water - e-goverment Water Disruption Solution Application",
    description:
      "A e-government mobile application that aims to help people to resolve water-related issues, learn about water quality and status of water dams in their areas, improve efficienty of water disruption reporting and complain system and more other functionality. Technologies: Android, Java, Gradle, SQLite, Google Maps API, OpenStreetMap API.",
  },
  {
    url: "/img/works/my-vaksin.png",
    name: "MyVaksin - Vaccination Appointment Booking System",
    description:
      "Vaccine Booking system which are inspired by JKJAV booking system. Technologies: HTML, CSS, JS, ASP.NET, .NET Framework, MYSQL",
  },
  {
    url: "/img/works/x-forum.png",
    name: "X-Forum - University Forum",
    description:
      "Forum that allow students to post forum post, comment, upvote and downvote. Technologies: ReactJS, NextJS, TailwindCSS, Firebase, Firestore",
  },
  {
    url: "/img/works/sponsorme.png",
    name: "Sponsor.me - Crowdfunding Website for University Students",
    description:
      "A crowdfunding website for university students to get fundings for projects. Students can start a crowdfund project, and back projects if interested. Technologies: HTML, CSS, JS, Java, JSP, MySQL.",
  },
  {
    url: "/img/works/finpal.png",
    name: "Fin-pal - Your Personal Finance Pal",
    description:
      "A education PWA that aims to let people to learn personal finance knowledge. The application provide personalized education content based on users characteristics. Technologies: NextJS, PWA, Firebase",
  },
  {
    url: "/img/works/c-19.png",
    name: "C-19 - 2D RPG Survival Game",
    description:
      "The inspiration for this game comes from the Coronavirus Covid-19 and many events in 2020, the virus is renamed as C-19 in this game. The aim of the game is to encourage people around the world. Even though Covid-19 has infected many people, do not give up the hope of living. Try to get out of the danger zone like Ken. One day humanity will escape from the infection of Covid-19. Technology: Unity 2D",
  },
  {
    url: "/img/works/ds-play-store.png",
    name: "Google Play Store Market Analysis",
    description:
      "Data Science project to analyze the Android Apps available in Play Store to look for insights in the data to derive strategies to drive growth and retention. Technologies: Python, Pandas, Plotly, Seaborn, Matplotlib.",
  },
  {
    url: "/img/works/ds-crypto-analysis.png",
    name: "Cryptocurrency Market Analysis",
    description:
      "Data Science project to analyze the Cryptocurrency market share by analyzing market share,percent change in a period of time and more to select the biggest winner and lossers cryptocurrency. Technologies: Python, Pandas, Numpy, Matplotlib.",
  },
];
const works = [
  {
    url: "/img/works/coingecko.png",
    name: "CoinGecko",
    tags: ["Product Management"],
    description:
      "CoinGecko is the world’s largest independent cryptocurrency data aggregator with over 12,000+ different cryptoassets tracked across more than 500+ exchanges worldwide.",
    link: "https://www.coingecko.com/",
  },
  {
    url: "/img/works/monsta-infinite.png",
    name: "Monsta Infinite",
    tags: ["typescript", "react-web3", "", "expressjs", "testing"],
    description:
      "Monsta Infinite is an NFT breeding, battle, and building game that falls under the rapidly growing 'play-to-earn' and GameFi sector on the Binance Smart Chain. I am responsible in building the Monsta Marketplace and also Monsta Wallet which are used by more than 100,000 users. Technologies: ReactJS Web3, Typescript, GraphQL, Metamask, Solidity.",
    link: "",
  },
  {
    url: "/img/works/confidential.png",
    name: "Digital Workspace Assistant",
    tags: ["typescript", "react", "nodejs", "expressjs", "testing"],
    description:
      "Develop and maintain Digital Workspace Assistant that allow user to access workspace through chat based application. Technologies: Typescript, MongoDB, ExpressJS, ReactJS, NodeJS, Redux, React-testing-library, Mocha, Chai, Jenkins.",
    link: "https://dscmalaysia.github.io/dsckitahack2021/",
  },
  {
    url: "/img/works/confidential.png",
    name: "Second-hand Car Management System",
    tags: ["react", "redux", "firebase", "chartjs"],
    description:
      "Develop and maintain document management system for clients which is a second-hand car retail company to manage their stocks, sales efficiently. Technologies: ReactJS, Redux, Firebase, SCSS, ChartJS, Git",
    link: "https://dscmalaysia.github.io/dsckitahack2021/",
  },
  {
    url: "/img/works/dsckitahack.png",
    name: "DSC Malaysia - DSC Kita Hack 2021 Landing Page",
    tags: ["html", "javascript", "tailwindcss", "figma"],
    description:
      "Landing Page of DSC Malaysia for DSC Kita Hack hackathon to show event, registration details and more.",
    link: "https://dscmalaysia.github.io/dsckitahack2021/",
  },
  {
    url: "/img/works/dacn.png",
    name: "Data Analytics Consultancy Network Landing Page",
    tags: ["nextjs", "react", "tailwindcss"],
    description:
      "Landing Page of Data Analytics Consultancy Network which is a non profit organization that help local businesses enhance business performance through the use of data analytics through recruiting student consultants.",
    link: "https://dacn.vercel.app/about#who-we-are",
  },
];
export { projects, works };
