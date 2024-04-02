import {
  Card,
  Typography,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import React from "react";
//import Chart from "react-apexcharts";

const LineGraph = () => {
  // const chartConfig = {
  //   type: "line",
  //   height: 240,
  //   series: [
  //     {
  //       name: "Sales",
  //       data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
  //     },
  //   ],
  //   options: {
  //     chart: {
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     title: {
  //       show: "",
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     colors: ["#020617"],
  //     stroke: {
  //       lineCap: "round",
  //       curve: "smooth",
  //     },
  //     markers: {
  //       size: 0,
  //     },
  //     xaxis: {
  //       axisTicks: {
  //         show: false,
  //       },
  //       axisBorder: {
  //         show: false,
  //       },
  //       labels: {
  //         style: {
  //           colors: "#616161",
  //           fontSize: "12px",
  //           fontFamily: "inherit",
  //           fontWeight: 400,
  //         },
  //       },
  //       categories: [
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sep",
  //         "Oct",
  //         "Nov",
  //         "Dec",
  //       ],
  //     },
  //     yaxis: {
  //       labels: {
  //         style: {
  //           colors: "#616161",
  //           fontSize: "12px",
  //           fontFamily: "inherit",
  //           fontWeight: 400,
  //         },
  //       },
  //     },
  //     grid: {
  //       show: true,
  //       borderColor: "#dddddd",
  //       strokeDashArray: 5,
  //       xaxis: {
  //         lines: {
  //           show: true,
  //         },
  //       },
  //       padding: {
  //         top: 5,
  //         right: 20,
  //       },
  //     },
  //     fill: {
  //       opacity: 0.8,
  //     },
  //     tooltip: {
  //       theme: "dark",
  //     },
  //   },
  // };
  return (
    <div>
      <div>
        <Card
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Line Chart
              </Typography>
            </div>
          </CardHeader>
          <CardBody
            className="px-2 pb-0"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {/* <Chart {...chartConfig} /> */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LineGraph;
