import React, { useContext } from "react";
import FeaturedSection from "../components/FeaturedSection";
import LatestNewsSection from "../components/LatestNewsSection";
import { FirebaseContext } from "../components/Firebase";
import { Helmet } from "react-helmet";

const Home = () => {
  const { firebase } = useContext(FirebaseContext);

  return (
    <div className="max-w-screen-lg mx-auto">
      <Helmet>
        <html lang="en" />
        <title>Home | Krypto Life</title>
        <meta
          name="google-site-verification"
          content="s88zq8kT6HFn-IQkkSR_vM-dW7ucHhvpPhcOGRn4EhA"
        />
         <meta name="description" content="A simple blog about crypto tech news developed with Create-React-App" />
      </Helmet>
      {!!firebase && <FeaturedSection firebase={firebase} />}
      <div className="w-full border-b-2 border-gray-100 mt-10" />
      {!!firebase && <LatestNewsSection firebase={firebase} />}
    </div>
  );
};

export default Home;
