import { Box, useBreakpointValue } from "@chakra-ui/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const TradeAreaChart = () => {
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
      <AreaChart
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
        <defs>
          <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
            <stop
              offset="5%"
              stopColor="rgba(0, 233, 223, 1)"
              stopOpacity={0}
            />
            <stop
              offset="95%"
              stopColor="rgba(0, 233, 223, 1)"
              stopOpacity={0.15}
            />
          </linearGradient>
          <linearGradient id="colorMv" x1="1" y1="0" x2="0" y2="0">
            <stop
              offset="5%"
              stopColor="rgba(33, 68, 84, 1)"
              stopOpacity={0.15}
            />
            <stop
              offset="95%"
              stopColor="rgba(33, 68, 84, 1)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis dataKey="money" unit="$" />
        <Tooltip />
        <Legend wrapperStyle={{ lineHeight: "40px" }} />
        <Area
          type="monotone"
          dataKey="Today"
          stroke="rgba(0, 233, 223, 1)"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="Yesterday"
          fillOpacity={1}
          fill="url(#colorMv)"
          stroke="rgba(33, 68, 84, 1)"
        />
      </AreaChart>
    </Box>
  );
};

export default TradeAreaChart;
