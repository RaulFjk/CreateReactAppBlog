import React, { useEffect, useContext, useState } from "react";
import PostItem from "../components/PostItem";
import { FirebaseContext } from "../components/Firebase";

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
        .catch((err) => {

        });
    }
  }, [firebase]);

  if (article) {
    return (
      <section>
        <section className="max-w-screen-lg mx-auto">
          <PostItem
            title={article.title}
            content={article.content}
            category={article.category}
            image={article.imageUrl}
            author={article.author}
          />
        </section>
      </section>
    );
  } else {
    return <div>Loading....</div>;
  }
};

export default Post;
