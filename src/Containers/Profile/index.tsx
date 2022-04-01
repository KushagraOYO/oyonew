import { Box, Button, Card, Input, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { OYOHEADER } from "../../constants/constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ['1-1-22','2-1-22','3-1-22','4-1-22','5-1-22','6-1-22','7-1-22','8-1-22','9-1-22','10-1-22',];

const Profile: React.FC = () => {
  const classes = useStyles();
  const data = {
    labels,
    datasets: [
      {
        label: "Booked to Date",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const data2 = {
    labels,
    datasets: [
      {
        label: "Srn To Date",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const data3 = {
    labels,
    datasets: [
      {
        label: "Occupency to Date",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const data4 = {
    labels,
    datasets: [
      {
        label: "Price to Date",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
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
        <Box className={classes.tabSection}>
          <Button className={classes.btn2} style={{ backgroundColor: "black" }}>
            BRM
          </Button>
          <Button className={classes.btn2} style={{ backgroundColor: "black" }}>
            Price
          </Button>
          <Button className={classes.btn2} style={{ backgroundColor: "black" }}>
            IRM
          </Button>
        </Box>
        <Box className={classes.chartBody}>
          <Box className={classes.chartParentContainer} >
            <Box className={classes.chart}>
              <Bar options={options} data={data} />
            </Box>
            <Box className={classes.chart}>
              <Bar options={options} data={data2} />
            </Box>
          </Box>
          <Box className={classes.chartParentContainer}>
            <Box className={classes.chart}>
              <Bar options={options} data={data3} />
            </Box>
            <Box className={classes.chart}>
              <Bar options={options} data={data4} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

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
  chartBody: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  chart: {
    width: "calc(30vw)",
    margin: "0px",
  },
  chartParentContainer: {
    display: "flex",
    justifyContent: 'space-around',
    width: "100%",
    margin: "50px 0px 50px 0px",
  }
});
