import React, { useContext } from "react";
import { FirebaseContext } from "./Firebase";
import PostSection from "../components/PostSection";

const PostPage = (props) => {
  const { firebase } = useContext(FirebaseContext);
  const pathname = props.location.pathname;
  const splitPath = pathname.split("/");
  const category = splitPath[1];

  return (
    <div className="mt-24 max-w-screen-lg mx-auto">
      <div className="flex mb-4 space-x-0 ml-5 md:ml-0">
        <span className="mr-2 text-lg font-bold font-mono">Category:</span>
        <span className="text-lg font-mono text-yellow-500">{category}</span>
      </div>
      {firebase && <PostSection category={category} firebase={firebase} />}
    </div>
  );
};

export default PostPage;
