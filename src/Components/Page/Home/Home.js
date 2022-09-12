import { Button, IconButton, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import Footer from "../../Share/Footer";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import Banner from "./Banner";
import Hotels from "./Hotels/Hotels";
import LastUpdate from "./LastUpdate";
import SSP from "./SSP";
import TimeDate from "./TimeDate";

const Home = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div>
          <h1>Dipu</h1>
        </div>
        <div>
          <Banner />
        </div>
      </div>
      {/* <Hotels /> */}

      <TimeDate />
      <LastUpdate />
      <div className="mt-16 mb-28 pl-48">
        <SSP />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
