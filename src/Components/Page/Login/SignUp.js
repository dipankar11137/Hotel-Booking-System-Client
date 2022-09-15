import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import logo from "../../image/icon/signup.png";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let signInError;
  if (gUser) {
    navigate("/");
  }

  const createDBUser = (name, email) => {
    fetch(`https://hotel-bocking.onrender.com/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const onSubmit = (data) => {
    // console.log(data.email, data.password, data.name);
    createUserWithEmailAndPassword(data.email, data.password);
    updateProfile({ displayName: data.name });
    createDBUser(data.name, data.email);
    toast.success("Updated profile");
    navigate("/");
  };
  // const paperStyle = { padding: "30px 20px", width: 380, margin: "20px auto" };
  // const headerStyle = { margin: 0 };
  // const avatarStyle = { backgroundColor: "#1bbd7e" };
  // const marginTop = { marginTop: 5 };
  return (
    <div className="flex justify-center h-screen bg-slate-400">
      <div className="w-4/12 pt-40">
        <img className="w-11/12 rounded-xl" src={logo} alt="" />
      </div>
      <div className="flex h-screen justify-center items-center  ">
        <div className="card w-96 shadow-xl bg-violet-50">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">SignUp</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered bg-white w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered bg-white w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered bg-white w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                className="bg-indigo-600 p-2  rounded-lg cursor-pointer font-bold uppercase text-white w-full"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p>
              <small>
                Already Have an Account ?{" "}
                <Link to="/login" className="text-blue-500 font-bold">
                  Please Login
                </Link>
              </small>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="bg-indigo-600 p-2  rounded-lg cursor-pointer font-bold uppercase text-white ml-4 -pt-3"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
    // <Grid>
    //   <Paper elevation={20} style={paperStyle}>
    //     <Grid align="center">
    //       <Avatar style={avatarStyle}>
    //         <AddCircleOutlineOutlinedIcon />
    //       </Avatar>
    //       <h2 style={headerStyle}>Sign Up</h2>
    //       <Typography variant="caption" gutterBottom>
    //         Please fill this form to create an account !
    //       </Typography>
    //     </Grid>
    //     <form>
    //       <TextField fullWidth label="Name" placeholder="Enter your name" />
    //       <TextField fullWidth label="Email" placeholder="Enter your email" />
    //       <FormControl component="fieldset" style={marginTop}>
    //         <FormLabel component="legend">Gender</FormLabel>
    //         <RadioGroup
    //           aria-label="gender"
    //           name="gender"
    //           style={{ display: "initial" }}
    //         >
    //           <FormControlLabel
    //             value="female"
    //             control={<Radio />}
    //             label="Female"
    //           />
    //           <FormControlLabel value="male" control={<Radio />} label="Male" />
    //         </RadioGroup>
    //       </FormControl>
    //       {/* <TextField
    //         fullWidth
    //         label="Phone Number"
    //         placeholder="Enter your phone number"
    //       /> */}
    //       <TextField
    //         fullWidth
    //         label="Password"
    //         placeholder="Enter your password"
    //       />
    //       <TextField
    //         fullWidth
    //         label="Confirm Password"
    //         placeholder="Confirm your password"
    //       />
    //       <FormControlLabel
    //         control={<Checkbox name="checkedA" />}
    //         label="I accept the terms and conditions."
    //       />
    //       <Typography>
    //         {" "}
    //         Already have an account ?{" "}
    //         <Link to="/login">
    //           {" "}
    //           <spam className="text-blue-500 font-bold">Log In</spam>
    //         </Link>
    //       </Typography>
    //       <Button type="submit" variant="contained" color="primary">
    //         Sign up
    //       </Button>
    //     </form>
    //   </Paper>
    // </Grid>
  );
};

export default SignUp;
