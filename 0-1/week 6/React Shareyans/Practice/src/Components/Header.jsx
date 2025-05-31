import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-emerald-500 h-15 flex items-center justify-between ">
      <div>
        <hl className=" text-2xl text-white font-extrabold ml-4"> Arsha</hl>
      </div>
      <div className=" text-white underline mr-5 flex justify-between gap-2">
        <Link to="/Home">Home</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
      </div>
    </div>
  );
};

export default Header;
