import { createStyles } from "@mui/styles";

export const useMainStyle = createStyles({
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
  typo1: {
    color: "red",
    pointerEvents: "none",
  },
});
