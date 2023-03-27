import { Box, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TradeBarChart = () => {
  const data = [
    {
      name: "0",
      Yesterday: 29,
      Today: 10,
      amt: 7,
    },
    {
      name: "1",
      Yesterday: 30,
      Today: 17,
      amt: 14,
    },
    {
      name: "2",
      Yesterday: 27,
      Today: 22,
      amt: 21,
    },
    {
      name: "3",
      Yesterday: 21,
      Today: 25,
      amt: 28,
    },
    {
      name: "4",
      Yesterday: 19,
      Today: 24,
      amt: 35,
    },
    {
      name: "5",
      Yesterday: 19,
      Today: 23,
      amt: 42,
    },
    {
      name: "6",
      Yesterday: 22,
      Today: 26,
      amt: 49,
    },
    {
      name: "7",
      Yesterday: 33,
      Today: 45,
      amt: 56,
    },
    {
      name: "8",
      Yesterday: 35,
      Today: 50,
      amt: 63,
    },
    {
      name: "9",
      Yesterday: 34,
      Today: 42,
      amt: 70,
    },
    {
      name: "10",
      Yesterday: 31,
      Today: 26,
      amt: 77,
    },
    {
      name: "11",
      Yesterday: 25,
      Today: 19,
      amt: 84,
    },
    {
      name: "12",
      Yesterday: 21,
      Today: 17,
      amt: 91,
    },
    {
      name: "13",
      Yesterday: 23,
      Today: 19,
      amt: 98,
    },
    {
      name: "14",
      Yesterday: 37,
      Today: 27,
      amt: 105,
    },
    {
      name: "15",
      Yesterday: 34,
      Today: 53,
      amt: 112,
    },
    {
      name: "16",
      Yesterday: 30,
      Today: 59,
      amt: 119,
    },
    {
      name: "17",
      Yesterday: 31,
      Today: 55,
      amt: 126,
    },
    {
      name: "18",
      Yesterday: 33,
      Today: 42,
      amt: 133,
    },
    {
      name: "19",
      Yesterday: 36,
      Today: 38,
      amt: 140,
    },
  ];

  const width = useBreakpointValue({
    base: 350,
    md: 700,
    lg: 1250,
  });

  const height = useBreakpointValue({
    base: 250,
    md: 400,
    lg: 600,
  });

  return (
    <Box>
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: -30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Today" fill="rgba(0, 233, 223, 1)" />
        <Bar dataKey="Yesterday" fill="rgba(33, 68, 84, 1)" />
      </BarChart>
    </Box>
  );
};

export default TradeBarChart;
