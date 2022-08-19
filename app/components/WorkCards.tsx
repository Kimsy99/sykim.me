import React from "react";
type props = {
  posts: any[];
};
const WorkCard = ({ posts }: props) => {
  return (
    <div className="py-8">
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
        {posts.map((post: any, index: number) => (
          <div
            className="flex sm:pb-8 text-center bg-gray-800 rounded-lg p-5"
            key={index}
          >
            <div>
              <div className="w-full bg-gray-900 rounded-md flex justify-center	">
                <img
                  src={post.url}
                  alt={post.name}
                  className="rounded-md object-contain h-full max-h-96 object-center	"
                />
              </div>
              <h3 className="py-2 text-xl text-white">{post.name}</h3>
              {post?.role && (
                <p className="text-blueGray-500 pb-2">
                  <i>Role: {post.role}</i>
                </p>
              )}
              <p className="text-blueGray-500">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
