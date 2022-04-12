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
  id: String;
  country: String;
  minDiff: String;
  default_floor: String;
  minUploadPrice: String;
  MaskingFactor: String;
  CrsDiff: String;
  floorProcessed: String;
  floorInserted: String;
  floorUploadLimit: String;
  crsPriceProcessed: String;
  crsPriceInserted: String;
  crsUploadLimit: String;
  Price_changes_coz_of_floor: String;
  SuccessRatio: String;
}
const FloorUploadLimit: React.FC = () => {
  const classes = useStyles();

  const [floorPricesData, setfloorPricesData] = useState<floorUploadLimit[]>([
    {
      id: "1",
      country: "INDIA",
      minDiff: "2",
      default_floor: "800",
      minUploadPrice: "100",
      MaskingFactor: "0.25",
      CrsDiff: "0.3",
      floorProcessed: "0",
      floorInserted: "28250",
      floorUploadLimit: "34553",
      crsPriceProcessed: "23244",
      crsPriceInserted: "3244",
      crsUploadLimit: "1321",
      Price_changes_coz_of_floor: "0",
      SuccessRatio: "90",
    },
    {
      id: "1",
      country: "INDIA",
      minDiff: "2",
      default_floor: "800",
      minUploadPrice: "100",
      MaskingFactor: "0.25",
      CrsDiff: "0.3",
      floorProcessed: "0",
      floorInserted: "28250",
      floorUploadLimit: "34553",
      crsPriceProcessed: "23244",
      crsPriceInserted: "3244",
      crsUploadLimit: "1321",
      Price_changes_coz_of_floor: "0",
      SuccessRatio: "90",
    },
    {
      id: "1",
      country: "INDIA",
      minDiff: "2",
      default_floor: "800",
      minUploadPrice: "100",
      MaskingFactor: "0.25",
      CrsDiff: "0.3",
      floorProcessed: "0",
      floorInserted: "28250",
      floorUploadLimit: "34553",
      crsPriceProcessed: "23244",
      crsPriceInserted: "3244",
      crsUploadLimit: "1321",
      Price_changes_coz_of_floor: "0",
      SuccessRatio: "90",
    },
    {
      id: "1",
      country: "INDIA",
      minDiff: "2",
      default_floor: "800",
      minUploadPrice: "100",
      MaskingFactor: "0.25",
      CrsDiff: "0.3",
      floorProcessed: "0",
      floorInserted: "28250",
      floorUploadLimit: "34553",
      crsPriceProcessed: "23244",
      crsPriceInserted: "3244",
      crsUploadLimit: "1321",
      Price_changes_coz_of_floor: "0",
      SuccessRatio: "90",
    },
    {
      id: "1",
      country: "INDIA",
      minDiff: "2",
      default_floor: "800",
      minUploadPrice: "100",
      MaskingFactor: "0.25",
      CrsDiff: "0.3",
      floorProcessed: "0",
      floorInserted: "28250",
      floorUploadLimit: "34553",
      crsPriceProcessed: "23244",
      crsPriceInserted: "3244",
      crsUploadLimit: "1321",
      Price_changes_coz_of_floor: "0",
      SuccessRatio: "90",
    },
    {
      id: "1",
      country: "INDIA",
      minDiff: "2",
      default_floor: "800",
      minUploadPrice: "100",
      MaskingFactor: "0.25",
      CrsDiff: "0.3",
      floorProcessed: "0",
      floorInserted: "28250",
      floorUploadLimit: "34553",
      crsPriceProcessed: "23244",
      crsPriceInserted: "3244",
      crsUploadLimit: "1321",
      Price_changes_coz_of_floor: "0",
      SuccessRatio: "90",
    },
  ]);
  return (
    <>
      <Header />
      <HeaderButton />
      <Box className={classes.root}>
        <span className={classes.txt1}>Price Upload Limits</span>
        <Box className={classes.tableBody} component={Paper}>
          <Box className={classes.tableABody}>
            <TableContainer>
              <Table>
                <TableHead component={Paper}>
                  <StyledTableRow>
                    <StyledTableCell align="center">Id</StyledTableCell>
                    <StyledTableCell align="center">Country</StyledTableCell>
                    <StyledTableCell align="center">
                      Min Diff ThresHold (%)
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Default Floor
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Minimum Upload Price
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Masking Factor(Owner Discount Factor)
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      CRS/Floor Diff(Discount Factor)
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      No. of Floor Processed
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      No. of Floor Inserted
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Floor Upload Limit
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      No. of CRS Price rows Processed
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      No. of CRS Price rows Inserted
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      CRS Upload Limit
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      No. of Price Changes Because of Floor
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Success Ratio%
                    </StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {floorPricesData.map((item, index) => {
                    return (
                      <StyledTableRow key={index}>
                        <StyledTableCell align="left">{item.id}</StyledTableCell>
                        <StyledTableCell align="left">{item.country}</StyledTableCell>
                        <StyledTableCell align="left">{item.minDiff}</StyledTableCell>
                        <StyledTableCell align="left">{item.default_floor}</StyledTableCell>
                        <StyledTableCell align="left">{item.minUploadPrice}</StyledTableCell>
                        <StyledTableCell align="left">{item.MaskingFactor}</StyledTableCell>
                        <StyledTableCell align="left">{item.CrsDiff}</StyledTableCell>
                        <StyledTableCell align="left">{item.floorProcessed}</StyledTableCell>
                        <StyledTableCell align="left">{item.floorInserted}</StyledTableCell>
                        <StyledTableCell align="left">{item.floorUploadLimit}</StyledTableCell>
                        <StyledTableCell align="left">{item.crsPriceInserted}</StyledTableCell>
                        <StyledTableCell align="left">{item.crsPriceProcessed}</StyledTableCell>
                        <StyledTableCell align="left">{item.crsUploadLimit}</StyledTableCell>
                        <StyledTableCell align="left">{item.Price_changes_coz_of_floor}</StyledTableCell>
                        <StyledTableCell align="left">{item.SuccessRatio}</StyledTableCell>
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

export default FloorUploadLimit;

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
    border: "1px solid #b0bec5"
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
