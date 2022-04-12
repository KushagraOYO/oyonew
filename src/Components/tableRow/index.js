import { TableCell, tableCellClasses, TableRow } from "@mui/material";
import { styled } from "@mui/styles";

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#eceff1",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
