import React, { useContext } from "react";
import { FirebaseContext } from "./Firebase";
import PostSection from "../components/PostSection";
import { Helmet } from "react-helmet";

const PostPage = (props) => {
  const { firebase } = useContext(FirebaseContext);
  const pathname = props.location.pathname;
  const splitPath = pathname.split("/");
  const category = splitPath[1];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  return (
    <div className="mt-24 max-w-screen-lg mx-auto">
       <Helmet>
        <html lang="en" />
        <title>{capitalizeFirstLetter(category)} | Krypto Life</title>
      </Helmet>
      <div className="flex mb-4 space-x-0 ml-5 md:ml-0">
        <span className="mr-2 text-lg font-bold font-mono">Category:</span>
        <span className="text-lg font-mono text-yellow-500">{capitalizeFirstLetter(category)}</span>
      </div>
      {firebase && <PostSection category={category} firebase={firebase} />}
    </div>
  );
};

export default PostPage;
