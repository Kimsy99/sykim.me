import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsPen, BsFillPeopleFill } from "react-icons/bs";
const what_i_do = [
  {
    title: "Web & App Development",
    description:
      "I do quite a lot of web & app stuff, covering frontend and backend.",
    imgUrl: "/img/kim-profile.png",
    href: [{ title: "Works", url: "/work" }],
    icon: (
      <AiOutlineAppstoreAdd className="text-white object-cover h-10 w-10 md:h-12 md:w-12 m-auto p-2" />
    ),
  },
  {
    title: "Writings",
    description: "I do write.......sometimes.",
    imgUrl: "/img/kim-profile.png",
    href: [
      { title: "HashNode", url: "https://blog.sykim.me" },
      {
        title: "Mirror.xyz",
        url: "https://mirror.xyz/0x7BaC55B885cA0D46658Daf09d0FFBEfBbeb31b5C",
      },
    ],
    icon: (
      <BsPen className="text-white object-cover h-10 w-10 md:h-12 md:w-12 m-auto p-2" />
    ),
  },
  {
    title: "Tech Community",
    description:
      "I built tech community in University. I love communities and I am passionate in helping students to learn tech knowledge outside of class.",
    imgUrl: "/img/kim-profile.png",
    href: [{ title: "Communities", url: "/about#university" }],
    icon: (
      <BsFillPeopleFill className="text-white object-cover h-10 w-10 md:h-12 md:w-12 m-auto p-2" />
    ),
  },
];
export { what_i_do };
