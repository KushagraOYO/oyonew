import { Box, Button, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { CUSTOMER_FLOOR, OYOHEADER } from "../../constants/constants";

const Customer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.header} component={Paper}>
        <span className={classes.type1}>{OYOHEADER}</span>
        <Input className={classes.input} placeholder="Search Property" />
      </Box>
      <Box className={classes.body}>
        <Box className={classes.bodySection} component={Paper}>
          <Button className={classes.btn1}>US_007</Button>
          <Box className={classes.line} />
          <Button className={classes.btn1}>Blocked</Button>
          <Box className={classes.line} />
          <Button className={classes.btn1}>Hyderabad</Button>
          <Box className={classes.line} />
          <Button className={classes.btn1}>Surat</Button>
          <Box className={classes.line} />
          <Button className={classes.btn1}>Nashville</Button>
        </Box>
        <Box className={classes.customerInfoContainer}>
          <span className={classes.text1} >{CUSTOMER_FLOOR}</span>
          <TableContainer component={Paper} className={classes.table} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableBody} align="center"><Typography>Room</Typography></TableCell>
                  <TableCell className={classes.tableBody} align="center"><Typography>From</Typography></TableCell>
                  <TableCell className={classes.tableBody} align="center"><Typography>To</Typography></TableCell>
                  <TableCell className={classes.tableBody} align="center"><Typography>Active</Typography></TableCell>
                  <TableCell className={classes.tableBody} align="center"><Typography>Occupied</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
                  <TableCell className={classes.tableBody} align="center"><Typography>201</Typography></TableCell>
                  <TableCell className={classes.tableBody} align="center"><Typography>Delhi</Typography></TableCell>
                  <TableCell className={classes.tableBody} align="center"><Typography>Mumbai</Typography></TableCell>
                  <TableCell className={classes.tableBody} align="center"><Typography>True</Typography></TableCell>
                  <TableCell className={classes.tableBody} align="center"><Typography>Occupied</Typography></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Customer;

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "10px",
    fontSize: "20px",
    fontWeight: "bolder",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
  type1: {
    color: "red",
    pointerEvents: "none",
  },
  input: {
    margin: "0px 20px 0px 20px",
    padding: "0px 5px 0px 5px",
  },
  bodySection: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    height: "40px",
    border: "1px solid black",
  },
  btn1: {
    width: "20%",
    color: "black",
  },
  line: {
    height: "100%",
    border: "1px solid black",
  },
  tabSection: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    height: "40px",
    margin: "40px 0px 0px 0px",
  },
  btn2: {
    width: "200px",
    backgroundColor: "blue",
  },
  customerInfoContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    margin: "20px 0px 0px 0px",
  },
  text1: {
    fontWeight: "bolder",
    fontSize: "18px",
    marginBottom: "10px"
  },
  tableBody: {
    borderCollapse: "collapse",
    border: "1px solid black"
  },
  table: {
    borderBottom: "1px solid black"
  }
});
