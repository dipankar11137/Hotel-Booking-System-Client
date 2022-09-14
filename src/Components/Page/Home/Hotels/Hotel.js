import React from "react";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import SportsRugbyIcon from "@material-ui/icons/SportsRugby";
import "../../../Css/PicStyle.css";
//
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CommentIcon from "@mui/icons-material/Comment";
// modal
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Popover, TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
// popper

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

// modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
// popper

const Hotel = ({ hotel }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  //   modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //   comment
  const [sValue, setSValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //   popper

  //   comment
  const handleComment = () => {
    console.log("get");
    console.log(inputValue);
  };
  return (
    <div className=" p-2 mt-3 bg-green-100 rounded-3xl shadow-2xl hover:shadow-inner hover:bg-lime-100 border-red-700">
      <div className="grid lg:grid-cols-3 gap-1">
        <div className="h-56">
          <img
            className="h-60 rounded-3xl w-80 pic-style"
            src={hotel?.img1}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-700">{hotel?.name}</h1>
          <a className="text-green-900 underline" href="#">
            {hotel?.location}
          </a>
          <p className="">
            <BeachAccessIcon />
            Beachfront
          </p>
          <p className="">
            <SportsRugbyIcon />
            Travel Sustainable property
          </p>
          <h2 className="text-xl font-bold ">{hotel?.room}</h2>
          <h2 className="">Breakfast : {hotel?.breakfast}</h2>
          <p className="text-orange-700 font-bold text-xs">
            FREE cancellation • No prepayment needed
          </p>
          <p className="text-orange-700 font-bold text-xs">
            You can cancel later, so lock in this great price today.
          </p>
        </div>
        <div className="flex justify-end pr-5">
          <div>
            <div className="flex">
              <div>
                <h1 className="font-bold">Review Score : </h1>
                <p className="text-xs font-bold text-orange-700">50 review</p>
              </div>
              <div className="bg-blue-700 pt-2 px-2 ml-1 rounded-xl font-bold text-white">
                4.7
              </div>
            </div>
            <div className="lg:mt-16">
              <p className="text-xs font-bold text-orange-700">
                1 night, 2 adults
              </p>
              <h1 className="text-2xl font-bold">$ {hotel?.dPrice}</h1>
              <p>$ 15 taxes and charges</p>
              <div className="gap-2 flex justify-end mt-2">
                <button className=" hover:bg-blue-500 bg-blue-700 text-white font-bold uppercase px-2 py-2 rounded-md  mt-2 ">
                  Booked
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <div>
        <CardActions disableSpacing>
          <div className="flex justify-end w-full">
            <button className="text-red-600 ">
              <FavoriteIcon />
            </button>
            {/* favicon  */}

            {/* <button className="pr-6">
              <CommentIcon />
            </button> */}
            <div>
              <Button onClick={handleOpen}>
                <CommentIcon />
              </Button>
              <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box sx={style}>
                  <TextareaAutosize
                    value={sValue}
                    onChange={(event, newValue) => {
                      setSValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Please Write Here"
                    style={{ width: 300, border: "3px blue solid" }}
                  />
                  <Button
                    onClick={handleComment}
                    variant="contained"
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </Box>
              </Modal>
            </div>
            <button>
              <ShareIcon />
            </button>
          </div>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Details :</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </div>
    </div>
  );
};

export default Hotel;
