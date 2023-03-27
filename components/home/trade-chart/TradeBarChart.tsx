import { Box, useBreakpointValue } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

const TradeBarChart = () => {
  const chartData: ApexOptions = {
    chart: {
      type: "line",
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100]
        // colorStops: []
      }
    },
    legend: {
      // position: '',
      width: 450
      // position: 'top',
    },
    series: [
      {
        name: "Distance Traveled",
        type: "column",
        data: [440, 505, 414, 571, 227, 413, 201, 352, 652]
      },
      {
        name: "Time Traveled",
        type: "column",
        data: [230, 420, 350, 270, 430, 220, 170, 310, 420]
      }
    ]
  };

  const width = useBreakpointValue(
    {
      base: '350px',
      md: '700px',
      lg: "1250px",
    },
  )

  const height = useBreakpointValue(
    {
      base: '250px',
      md: '400px',
      lg: "600px",
    },
  )
  
  return (
    <Box>
      <ReactApexChart
        type="bar"
        height={height}
        width={width}
        options={chartData} series={chartData.series}
      />
    </Box>
  );
};

export default TradeBarChart;
