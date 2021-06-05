import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "./Firebase";
import BigPost from "./BigPost";

const PostSection = ({ category, firebase }) => {
  // const { firebase } = useContext(FirebaseContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (firebase) {
      firebase.filterArticlesByCategory({
        category,
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
    }
  }, [category]);

  if (articles.length > 0) {
    return (
      <div>
        {articles.map((article) => (
          <BigPost
            id={article.id}
            key={article.id}
            title={article.title}
            content={article.content}
            category={article.category}
            posted={article.posted.toDate()}
            image={article.imageUrl}
            author={article.author}
          />
        ))}
      </div>
    );
  } else {
    return <div>Loading ...</div>;
  }
};

export default PostSection;
