import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Box className={classes.headerSection1}>
          <>
            <span className={classes.headerTitle1}>OYO</span>
            <span className={classes.headerTitle2}>pricing</span>
          </>
        </Box>
        <Box className={classes.headerSection2}>
          <Button className={classes.headerBtn} size="small" >
            <span className={classes.whiteText}>Consumer</span>
          </Button>
          <Button className={classes.headerBtn} size="small" >
            <span className={classes.whiteText}>Floor</span>
          </Button>
          <Button className={classes.headerBtn} size="small" >
            <span className={classes.whiteText}>Hotel Configs</span>
          </Button>
          <Button className={classes.headerBtn} size="small" >
            <span className={classes.whiteText}>Coupons</span>
          </Button>
          <Button className={classes.headerBtn} size="small" >
            <span className={classes.whiteText}>Containces</span>
          </Button>
          <Button className={classes.headerBtn} size="small" >
            <span className={classes.whiteText}>Paise Containces</span>
          </Button>
          <Button className={classes.headerBtn} size="small" >
            <span className={classes.whiteText}>Promotion Containces</span>
          </Button>
          <Button className={classes.headerBtn} size="small" >
            <span className={classes.whiteText}>Price Update Stats</span>
          </Button>
          <Button className={classes.headerBtn} size="small" >
            <span className={classes.whiteText}>Price Configuration</span>
          </Button>
          <Button className={classes.headerBtn} size="small" >
            <span className={classes.whiteText}>Compset</span>
          </Button>
          <Button className={classes.headerBtn} size="small" >
            <span className={classes.whiteText}>Price Unavailability</span>
          </Button>
          <Button className={classes.headerBtn} size="small" >
            <span className={classes.whiteText}>RP Info</span>
          </Button>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
  },
  header: {
    padding: "10px 10px 0px 10px",
  },
  headerSection1: {
    display: "flex",
    width: "100%",
    justifyContent: "end",
    marginBottom: "5px"
  },
  headerSection2: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly"
  },
  headerTitle1: {
    fontWeight: "bolder",
    color: "white",
    fontSize: "22px",
  },
  headerTitle2: {
    color: "white",
    fontSize: "22px",
  },
  whiteText: {
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "none",
    whiteSpace: "nowrap"
  },
  headerBtn: {
  }
});
