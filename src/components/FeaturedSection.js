import React, { useEffect, useContext, useState } from "react";
import MainPost from "./MainPost";
import SmallPost from "./SmallPost";
import { FirebaseContext } from "./Firebase"

const FeaturedSection = ({ firebase }) => {
  const [articles, setArticles] = useState([]);

  const isFeatured = true;

  useEffect(() => {
    firebase.getFeaturedArticles({
      isFeatured,
      onSnapshot: (data) => {
        const filteredArticles = [];
        data.forEach((doc) => {
          filteredArticles.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setArticles(filteredArticles);
      },
    });
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (articles.length > 0) {
    let mainPost = articles[0];
    let category = capitalizeFirstLetter(mainPost.category);

    let smallPostList = [...articles];
    smallPostList.splice(0, 1);

    return (
      <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mt-24">
        <MainPost
          id={mainPost.id}
          title={mainPost.title}
          category={category}
          posted={mainPost.posted.toDate()}
          image={mainPost.imageUrl}
          author={mainPost.author}
        />
        <div className="w-full md:w-4/7">
          {smallPostList.map((e) => (
            <SmallPost
              id={e.id}
              key={e.id}
              title={e.title}
              category={capitalizeFirstLetter(e.category)}
              image={e.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default FeaturedSection;
