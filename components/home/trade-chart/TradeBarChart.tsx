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
      time: "03:00 AM",
      Yesterday: 1105,
      Today: 1390,
      money: 1300,
    },
    {
      time: "04:00 AM",
      Yesterday: 1703,
      Today: 1420,
      money: 1450,
    },
    {
      time: "05:00 AM",
      Yesterday: 1367,
      Today: 1530,
      money: 1500,
    },
    {
      time: "06:00 AM",
      Yesterday: 1643,
      Today: 1200,
      money: 1600,
    },
    {
      time: "07:00 AM",
      Yesterday: 1690,
      Today: 1645,
      money: 1700,
    },
    {
      time: "08:00 AM",
      Yesterday: 1766,
      Today: 1990,
      money: 1800,
    },
    {
      time: "09:00 AM",
      Yesterday: 1023,
      Today: 1790,
      money: 1900,
    },
    {
      time: "10:00 AM",
      Yesterday: 1809,
      Today: 1710,
      money: 2000,
    },
    {
      time: "11:00 AM",
      Yesterday: 690,
      Today: 1345,
      money: 1700,
    },
    {
      time: "12:00 PM",
      Yesterday: 1766,
      Today: 2590,
      money: 1800,
    },
    {
      time: "13:00 PM",
      Yesterday: 1023,
      Today: 1790,
      money: 1900,
    },
    {
      time: "14:00 PM",
      Yesterday: 1809,
      Today: 1410,
      money: 3000,
    },
    {
      time: "15:00 PM",
      Yesterday: 1690,
      Today: 1345,
      money: 1700,
    },
    {
      time: "16:00 PM",
      Yesterday: 2166,
      Today: 2890,
      money: 1800,
    },
    {
      time: "17:00 PM",
      Yesterday: 1023,
      Today: 1790,
      money: 1900,
    },
    {
      time: "18:00 PM",
      Yesterday: 1809,
      Today: 1410,
      money: 3000,
    },
    {
      time: "19:00 PM",
      Yesterday: 690,
      Today: 1745,
      money: 1700,
    },
    {
      time: "20:00 PM",
      Yesterday: 1766,
      Today: 2590,
      money: 1800,
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
          left: -8,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis dataKey="money" unit="$" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Today" fill="rgba(0, 233, 223, 1)" />
        <Bar dataKey="Yesterday" fill="rgba(33, 68, 84, 1)" />
      </BarChart>
    </Box>
  );
};

export default TradeBarChart;
