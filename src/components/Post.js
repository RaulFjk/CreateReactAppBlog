import React, { useEffect, useContext, useState } from "react";
import PostItem from "../components/PostItem";
import { FirebaseContext } from "../components/Firebase";
import { Helmet } from "react-helmet";

const Post = (props) => {
  const { firebase } = useContext(FirebaseContext);

  const [article, setArticle] = useState("");

  const pathname = props.location.pathname;
  const splitPath = pathname.split("/");
  const articleId = splitPath[2];

  useEffect(() => {
    if (firebase) {
      firebase
        .getArticle(articleId)
        .then((snapshot) => {
          setArticle({
            id: snapshot.id,
            ...snapshot.data(),
          });
        })
        .catch((err) => {});
    }
  }, [firebase]);

  if (article) {
    let keywordsArray = [];
    keywordsArray.push(article.firstKeyword);
    keywordsArray.push(article.secondKeyword);
    return (
      <section>
        <section className="max-w-screen-lg mx-auto">
          <Helmet>
            <title>{article.title} | Krypto Life</title>
            <meta name="description" content={article.description} />
            <meta name="keywords" content={keywordsArray.join(`, `)} />
          </Helmet>
          <PostItem
            title={article.title}
            firstKeyword={article.firstKeyword}
            secondKeyword={article.secondKeyword}
            content={article.content}
            category={article.category}
            image={article.imageUrl}
            author={article.author}
            posted={article.posted}
          />
        </section>
      </section>
    );
  } else {
    return <div>Loading....</div>;
  }
};

export default Post;
