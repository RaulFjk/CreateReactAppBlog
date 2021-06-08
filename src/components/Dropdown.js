import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FirebaseContext } from "./Firebase";

const Dropdown = ({ isOpen, toggle }) => {
  const { firebase, user } = useContext(FirebaseContext);
  function handleLogOutClick() {
    firebase.logout();
  }
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-8 text-center items-center bg-yellow-500 font-mono mt-16"
          : "hidden"
      }
    >
      <NavLink className="p-4  hover:bg-yellow-600 " to="/">
        Home
      </NavLink>
      <NavLink className="p-4 hover:bg-yellow-600 " to="/exclusives">
        Exclusives
      </NavLink>
      <NavLink className="p-4 hover:bg-yellow-600 " to="/nft">
        NFT
      </NavLink>
      <NavLink className="p-4 hover:bg-yellow-600 " to="/bitcoin">
        Bitcoin
      </NavLink>
      <NavLink className="p-4 hover:bg-yellow-600 " to="/altcoin">
        Altcoins
      </NavLink>
      {user && (
        <NavLink className="p-4 hover:bg-yellow-600 " to="/manage-content">
          Manage Content
        </NavLink>
      )}
      {!user && (
        <NavLink className="p-4 hover:bg-yellow-600 " to="/signin">
          Sign In
        </NavLink>
      )}
      {user && (
        <button
          className="p-4 hover:bg-yellow-600 "
          onClick={handleLogOutClick}
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Dropdown;
