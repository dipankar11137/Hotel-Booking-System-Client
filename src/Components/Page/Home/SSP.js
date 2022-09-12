import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import search from "../../image/SSP/search.svg";
// import select from "../../image/SSp/select.svg";
// import pay from "../../image/SSP/pay.svg";
import { ImageListItem } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      padding: theme.spacing(1),
      margin: theme.spacing(3),
      width: theme.spacing(40),
      height: theme.spacing(46),
    },
  },
}));

const SSP = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img
          className="h-80"
          src="https://www.ezeeabsolute.com/images/icons/contactless-bookings.png"
          alt=""
        />

        <h1 className="font-bold text-3xl mt-3">Search</h1>
        <p>
          Choose your origin, destination, booking dates and search for Hotels
        </p>
      </div>
      <div>
        <img
          className="h-80"
          src="https://eticket.railway.gov.bd/v2/assets/img/home/select.svg"
          alt=""
        />

        <h1 className="font-bold text-3xl mt-3">Select</h1>
        <p> Select your desired Date and choose your Rooms</p>
      </div>
      <div>
        <img
          className="h-80"
          src="https://eticket.railway.gov.bd/v2/assets/img/home/pay.svg"
          alt=""
        />

        <h1 className="font-bold text-3xl mt-3">Pay </h1>
        <p>Pay for the rooms via Debit / Credit Cards or MFS</p>
      </div>
    </div>
  );
};

export default SSP;
