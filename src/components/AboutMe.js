import React, { useState, useEffect, useContext } from "react";
import aboutWallpaper from "../images/aboutWallpaper.jpg";
import { FirebaseContext } from "../components/Firebase";
import { Helmet } from "react-helmet";

const AboutMe = (props) => {
  const { firebase, user } = useContext(FirebaseContext);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (user) {
      const uid = user.uid;
      firebase.getAdminProfile({
        uid,
        onSnapshot: (r) => {
          setAuthor({
            id: r.docs[0].id,
            ...r.docs[0].data(),
          });
        },
      });
    }
  }, [user]);

  if (author) {
    return (
      <div>
        <Helmet>
          <title>About Me | Krypto Life</title>
          <meta name="description" content="A short description of the author" />
          <meta name="keywords" content="about, me"/>
        </Helmet>
        <div className="block">
          <div className="min-w-full h-96 overflow-hidden">
            <img
              className="w-screen h-screen object-cover object-top"
              src={aboutWallpaper}
              alt="about wallpaper"
            />
          </div>
          <div>
            <div className="mt-3 mx-auto max-w-lg p-8 shadow-xl bg-gray-100 my-5">
              <h1 className="text-3xl uppercase">
                {author.firstName + " " + author.lastName}
              </h1>
              <p className="font-semibold mb-5">{author.occupation}</p>
              <p>{author.about}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading ...</div>;
  }
};

export default AboutMe;
