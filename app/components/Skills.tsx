import React from "react";

const SkillsPage = () => {
  return (
    <div className="max-w-screen-lg  mx-auto  px-5">
      <div className="flex flex-col col-span-full space-y-2 lg:justify-between my-20">
        <h2 className="leading-tight text-3xl md:text-4xl text-white ">
          My Skills
        </h2>
        <h2 className="leading-tight text-3xl md:text-4xl text-blueGray-500">
          Basically.. what i can
        </h2>
      </div>
      <div className="prose-dark text-blueGray-500">
        <div>
          <h2 className="mt-20 mb-10 text-2xl font-semibold text-white">
            Works
          </h2>
          <ul>
            <li className="relative">asd</li>
            <li>asd</li>
            <li>asd</li>
          </ul>
          <p>aksdfjlaksdjflkasjklfasdfasd</p>
          <p>aksdfjlaksdjflkasjklfasdfasd</p>
          <p>aksdfjlaksdjflkasjklfasdfasd</p>
          <p>aksdfjlaksdjflkasjklfasdfasd</p>
          {/* <WorkCard posts={works} /> */}
        </div>
        <div>
          <h2 className="mt-20 mb-10 text-2xl font-semibold text-white">
            Projects
          </h2>
          {/* <WorkCard posts={projects} /> */}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
