import { Grid } from "@material-ui/core";
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LastUpdate = () => {
  return (
    <div>
      <h1 className="text-center">Last Update</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Item>
            <h1>Available Rooms</h1>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <h1>Log In user</h1>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default LastUpdate;
