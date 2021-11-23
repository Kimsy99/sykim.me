import React from "react";
import { Link } from "remix";

type Href = {
  title: string;
  url: string;
};
type props = {
  title: string;
  description: string;
  href: Array<Href>;
  icon: JSX.Element;
};
const SkillCard = ({ title, description, href, icon }: props) => {
  console.log("title: ", title);
  return (
    <div className="bg-gray-800 transition ease-in-out hover:-translate-y-3 duration-700 flex justify-between rounded-lg col-span-full md:col-span-6 skill-card">
      <div className="flex flex-col justify-between ">
        <div className="">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="text-gray-300 md:w-11/12 md:mr-0">{description}</p>
        </div>
        <div>
          {href.map((obj, index) => (
            <Link key={index} to={obj.url}>
              <p className="hover:text-white text-blueGray-500 cursor-pointer">
                READ MORE @{obj.title} →
              </p>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="hidden md:inline-flex shadow-lg rounded-full md:h-16 md:w-16 h-10 w-10"> */}
      {/* {icon} */}
      {/* </div> */}
    </div>
  );
};

export default SkillCard;
