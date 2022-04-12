import { Box, Button, Input, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { OYOHEADER } from "../../constants/constants";

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header} component={Paper}>
      <span className={classes.type1}>{OYOHEADER}</span>
      <Input className={classes.input} placeholder="Search Property" />
    </Box>
  );
};

export default Header;

export const useStyles = makeStyles({
  header: {
    padding: "10px",
    fontSize: "20px",
    fontWeight: "bolder",
  },
  type1: {
    color: "red",
    pointerEvents: "none",
  },
  input: {
    margin: "0px 20px 0px 20px",
    padding: "0px 5px 0px 5px",
  },
});
