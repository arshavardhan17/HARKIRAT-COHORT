import React, { useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";
import Parent from "./Components/Parent";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { About } from "./Pages/About";
import Profile from "./Pages/Profile";

const App = () => {
  {
    // axious components info
  }
  const [Data, setData] = useState([]);

  const GetData = async () => {
    const responce = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30"
    );
    setData(responce.data);
  };

  return (
    <div className="bg-gray-800 w-full h-screen ">
      <Header />
      <Form />
      {
        // props
      }
      <Card title={"my Cards"} content={"sdddiijdndakn"} />
      {
        // passing props through parent
      }
      <Parent name="arsha" />
      {
        // Axios
      }
      <button
        className="px-6 py-3 bg-teal-600 text-2xl text-white mt-8 "
        onClick={GetData}>
        Get data
      </button>
      <div className="p-5 bg-gray-950">
        {Data.map((item, id) => {
          return (
            <div
              key={id}
              className="bg-gray-50 text-black flex items-center  justify-between w-full px-7 py-6 rounded mb-3">
              <img
                src={item.download_url}
                alt="img"
                className="w-20 h-20 rounded-full"
              />
              <h1>{item.author}</h1>
            </div>
          );
        })}
      </div>
      {
        //Routing
      }
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
