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
import HeaderButton from "../../Components/header/headerButtons";
import { StyledTableCell, StyledTableRow } from "../../Components/tableRow";

interface floorUploadLimit {
  ConfigKey: String;
  ConfigValue: String;
}
const FloorConfig: React.FC = () => {
  const classes = useStyles();

  const [floorPricesData, setfloorPricesData] = useState<floorUploadLimit[]>([
    {
      ConfigKey: "CONSUMERPRICE",
      ConfigValue: "false",
    },
    {
      ConfigKey: "CONSUMERPRICE",
      ConfigValue: "false",
    },
    {
      ConfigKey: "CONSUMERPRICE",
      ConfigValue: "false",
    },
    {
      ConfigKey: "CONSUMERPRICE",
      ConfigValue: "false",
    },
    {
      ConfigKey: "CONSUMERPRICE",
      ConfigValue: "false",
    },
  ]);
  return (
    <>
      <Header />
      <HeaderButton />
      <Box className={classes.root}>
        <Box className={classes.tableBody} component={Paper}>
          <Box className={classes.tableABody}>
            <TableContainer>
              <Table>
                <TableHead component={Paper}>
                  <StyledTableRow>
                    <StyledTableCell align="center">Config key</StyledTableCell>
                    <StyledTableCell align="center">
                      Config Value
                    </StyledTableCell>
                    <StyledTableCell align="center">Edit</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {floorPricesData.map((item, index) => {
                    return (
                      <StyledTableRow key={index}>
                        <StyledTableCell align="left">
                          {item.ConfigKey}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {item.ConfigValue}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Button color="inherit" style={{backgroundColor: "#b0bec5"}}>
                              Edit
                          </Button>
                        </StyledTableCell>
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

export default FloorConfig;

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
    border: "1px solid #b0bec5",
  },
  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  tableABody: {
    display: "flex",
  },
  btn2: {
    width: "300px",
  },
});
