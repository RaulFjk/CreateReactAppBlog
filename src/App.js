import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { FirebaseContext, useAuth } from "./components/Firebase";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Post from "./components/Post";
import PostPage from "./components/PostPage";
import LogIn from "./components/LogIn";
import ManageContent from "./components/ManageContent";
import AddArticle from "./components/AddArticle";
import EditPost from "./components/EditPost";
import AboutMe from "./components/AboutMe";
import { Helmet } from "react-helmet";
import Dropdown from "./components/Dropdown";

const App = () => {
  const { user, firebase, loading } = useAuth();

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", hideMenu)

    return () => {
      window.removeEventListener("resize", hideMenu)
    }
  })


  return (
    <FirebaseContext.Provider value={{ user, firebase, loading }}>
      <BrowserRouter>
        <div className="overflow-hidden block items-center justify-center">
          <Helmet>
            <html lang="en" />
            <title>Google</title>
            <meta
              name="google-site-verification"
              content="s88zq8kT6HFn-IQkkSR_vM-dW7ucHhvpPhcOGRn4EhA"
            />
          </Helmet>
          <header className="sticky top-0 ">
            <Navbar toggle={toggle} />
          </header>
          <div className="w-full"><Dropdown isOpen={isOpen} toggle={toggle} /></div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/home" component={Home} />
            <Route exact path="/article/:id" component={Post} />
            <Route path="/exclusives" component={PostPage} />
            <Route path="/nft" component={PostPage} />
            <Route path="/bitcoin" component={PostPage} />
            <Route path="/altcoin" component={PostPage} />
            <Route path="/manage-content" component={ManageContent} />
            <Route path="/add-article" component={AddArticle} />
            <Route path="/about-me" component={AboutMe} />
            <Route exact path="/article/edit/:id" component={EditPost} />
          </Switch>
          <footer className="bg-gray-800 p-10 sm:mt-10">
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </FirebaseContext.Provider>
  );
};

export default App;
