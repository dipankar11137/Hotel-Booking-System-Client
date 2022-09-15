import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Loading from "../../Share/Loading";
import axios from "axios";
// import login from "../../../Images/Login/360_F_267991674_gvrxELXuoNicNkhZlnZy3e90gDeD9L3f.jpg";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  //   Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 380,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  // matarial
  //   const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  //   const {
  //     register,
  //     formState: { errors },
  //     handleSubmit,
  //   } = useForm();
  //   const [signInWithEmailAndPassword, user, loading, error] =
  //     useSignInWithEmailAndPassword(auth);

  //   let signInError;
  const navigate = useNavigate();
  //   const location = useLocation();

  //   let from = location.state?.from?.pathname || "/";

  //   if (user || gUser) {
  //     navigate(from, { replace: true });
  //   }

  //   if (loading || gLoading) {
  //     // return <Loading></Loading>;
  //   }

  //   if (error || gError) {
  //     signInError = (
  //       <p className="text-red-500">
  //         <small>{error?.message || gError?.message}</small>
  //       </p>
  //     );
  //   }

  const onSubmit = (data) => {
    console.log(data);
    // const email = data.email;
    // await signInWithEmailAndPassword(data.email, data.password);
    // const { accessToken } = await axios.post(
    //   "https://boxberry.onrender.com/login",
    //   {
    //     email,
    //   }
    // );
    // console.log(accessToken);
    navigate("/");
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Log In</h2>
        </Grid>
        <TextField label="Email" placeholder="Enter Email" fullWidth required />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          onClick={onSubmit}
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Login
        </Button>
        <Typography>
          <Link to="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?
          <Link to="/register">
            <spam className="text-blue-500 font-bold"> Sign Up</spam>
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
