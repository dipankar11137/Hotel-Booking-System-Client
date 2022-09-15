import { Button, IconButton, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import Footer from "../../Share/Footer";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import Banner from "./Banner";
import Cards from "./Card/Cards";
import HomeHotels from "./Hotels/HomeHotels";
import RoomUpdate from "./Hotels/RoomUpdate";
import LastUpdate from "./LastUpdate";
import SearchButton from "./SearchButton";
import SSP from "./SSP";

const Home = () => {
  return (
    <div className="">
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 mt-2">
        <div className="  flex justify-center align-center ">
          <SearchButton />
        </div>
        <div className="pr-5">
          <Banner />
        </div>
      </div>
      {/* <Hotels /> */}
      <Cards />
      <HomeHotels />

      {/* <TimeDate /> */}

      <LastUpdate />
      <RoomUpdate />
      <div className="mt-16 mb-28 pl-48">
        <SSP />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
