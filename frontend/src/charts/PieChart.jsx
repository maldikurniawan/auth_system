import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { FaChartPie } from "react-icons/fa";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
    type: "pie",
    width: 280,
    height: 280,
    series: [44, 55, 13, 43, 22],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
        legend: {
            show: false,
        },
    },
};

export default function Example() {
    return (
        <Card className="w-full rounded-lg">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex gap-2 rounded-lg flex-row items-center"
            >
                <FaChartPie className="ml-4"/>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Pie Chart
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="mt-4 grid place-items-center px-2">
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
}