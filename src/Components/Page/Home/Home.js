import { Button, IconButton, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <h1>Home</h1>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary" disableElevation>
        Disable elevation
      </Button>
      <IconButton aria-label="delete" className={classes.margin}>
        <DeleteIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Home;
