import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Header from "../../Components/header";
import { StyledTableCell, StyledTableRow } from "../../Components/tableRow";

interface floorPrices {
  hotel: String;
  room_category: String;
  Prices: String;
  Price_From: String;
  Price_Till: String;
  Reason: String;
  Status: String;
  Active_From: String;
  Active_Till: String;
}
const OyoPanel: React.FC = () => {
  const classes = useStyles();

  const [floorPricesData, setfloorPricesData] = useState<floorPrices[]>([
    {
      hotel: "GOA526",
      room_category: "Classic (2X)",
      Prices: "1: 200 2: 240",
      Price_From: "2022-04-12",
      Price_Till: "2022-05-12",
      Reason: "CentralRevenue",
      Status: "ACTIVE",
      Active_From: "10th Feb 2021",
      Active_Till: " ",
    },
    {
      hotel: "GOA526",
      room_category: "Classic (2X)",
      Prices: "1: 200 2: 240",
      Price_From: "2022-04-12",
      Price_Till: "2022-05-12",
      Reason: "CentralRevenue",
      Status: "ACTIVE",
      Active_From: "10th Feb 2021",
      Active_Till: " ",
    },
  ]);
  return (
    <>
      <Header />
      <Box className={classes.root}>
        <span className={classes.txt1}>Floor Prices</span>
        <Box className={classes.section1}>
          <Box className={classes.contain}>
            <Input className={classes.input} />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#cfd8dc",
                marginBottom: "10px",
                width: "200px",
                color: "black",
              }}
            >
              <span className={classes.btnTxt}>Submit</span>
            </Button>
            <Button
              variant="outlined"
              color="error"
              style={{
                marginBottom: "5px",
                width: "200px",
              }}
            >
              <span className={classes.btnTxt}>Upload Floor Prices</span>
            </Button>
          </Box>
          <Box className={classes.contain}>
            <FormControl className={classes.selectLabel}>
              <InputLabel id="lbl1">Room Categoty Id</InputLabel>
              <Select
                labelId="lbl1"
                label="Room Categoty Id"
                className={classes.select}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#cfd8dc",
                marginBottom: "10px",
                width: "200px",
                color: "black",
              }}
            >
              <span className={classes.btnTxt}>Create New Floor Prices</span>
            </Button>
            <Button
              variant="outlined"
              color="error"
              style={{
                marginBottom: "5px",
                width: "200px",
              }}
            >
              <span className={classes.btnTxt}>Sample Floor Prices</span>
            </Button>
          </Box>
          <Input className={classes.input} />
          <Input className={classes.input} />
          <FormControl className={classes.selectLabel}>
            <InputLabel id="lbl1">Status</InputLabel>
            <Select labelId="lbl1" label="Status" className={classes.select}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="lbl2">TImeZone</InputLabel>
            <Select labelId="lbl2" label="TImeZone" className={classes.select}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={classes.tableBody} component={Paper}>
          <Box className={classes.tableHeader}>
            <Button disabled variant="contained" className={classes.btn2}>
              Previous
            </Button>
            <Box>
              <span>Page </span>
              <Input value={1} style={{width: "2rem", textAlign: "center"}} />
              <span>of 1</span>
            </Box>
            <FormControl>
              <InputLabel id="lbl2">row</InputLabel>
              <Select labelId="lbl2" label="row" className={classes.select}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1 row</MenuItem>
                <MenuItem value={2}>2 row</MenuItem>
                <MenuItem value={3}>3 row</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" disabled className={classes.btn2}>Next</Button>
          </Box>
          <Box className={classes.tableABody}>
            <TableContainer>
              <Table>
                <TableHead component={Paper} >
                  <StyledTableRow>
                    <StyledTableCell align="center">Hotel</StyledTableCell>
                    <StyledTableCell align="center">
                      Room Category
                    </StyledTableCell>
                    <StyledTableCell align="center">Prices</StyledTableCell>
                    <StyledTableCell align="center">Price From</StyledTableCell>
                    <StyledTableCell align="center">Price Till</StyledTableCell>
                    <StyledTableCell align="center">Reason</StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">
                      Active From
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Active Till
                    </StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {floorPricesData.map((item, index) => {
                    return (
                      <StyledTableRow key={index}>
                        <StyledTableCell align="left">{item.hotel}</StyledTableCell>
                        <StyledTableCell align="left">{item.room_category}</StyledTableCell>
                        <StyledTableCell align="left">{item.Prices}</StyledTableCell>
                        <StyledTableCell align="left">{item.Price_From}</StyledTableCell>
                        <StyledTableCell align="left">{item.Price_Till}</StyledTableCell>
                        <StyledTableCell align="left">{item.Reason}</StyledTableCell>
                        <StyledTableCell align="left">{item.Status}</StyledTableCell>
                        <StyledTableCell align="left">{item.Active_From}</StyledTableCell>
                        <StyledTableCell align="left">{item.Active_Till}</StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OyoPanel;

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "15px",
  },
  section1: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  contain: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "200px",
    border: "1px solid #cfd8dc",
    borderRadius: "5px",
    margin: "5px 0px 10px 0px",
    height: "40px",
    padding: "5px",
  },
  btn1: {
    margin: "5px 0px 5px 0px",
  },
  btnTxt: {
    fontSize: "12px",
    whiteSpace: "nowrap",
  },
  select: {
    width: "200px",
    height: "40px",
    margin: "5px 0px 10px 0px",
  },
  selectLabel: {
    border: "2px solid #cfd8dc",
    borderRadius: "5px",
  },
  txt1: {
    fontSize: "20px",
    margin: "15px",
  },
  tableBody: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  tableHeader: {
    display: "flex",
    margin: "5px",
    justifyContent: "space-between",
  },
  tableABody: {
    display: "flex",
    margin: "5px",
  },
  btn2: {
    width: "300px",
  },
});
