import React from "react";
import Navbar from "../components/Navbar"; // Adjust the path if needed
import { Container, Row, Col, Card } from "react-bootstrap";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from "chart.js";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

// Static Data for Charts
const chartData = {
  labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
  datasets: [
    {
      label: "Sales (in $)",
      data: [12000, 9500, 18000, 7500, 14000],
      backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#17a2b8"],
      borderColor: "#fff",
      borderWidth: 1,
    },
  ],
};

// Bar Chart Configuration
const barChartOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Sales Overview (Bar Chart)" },
  },
};

// Line Chart Data
const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Monthly Sales",
      data: [8000, 12000, 15000, 17000, 16000, 20000],
      borderColor: "#007bff",
      backgroundColor: "rgba(0,123,255,0.5)",
      tension: 0.4,
    },
  ],
};

// Line Chart Options
const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Monthly Sales Trend (Line Chart)" },
  },
};

// Pie Chart Data
const pieChartData = {
  labels: ["Electronics", "Clothing", "Groceries", "Accessories", "Others"],
  datasets: [
    {
      data: [30, 25, 20, 15, 10],
      backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#17a2b8"],
      hoverOffset: 4,
    },
  ],
};

// Pie Chart Options
const pieChartOptions = {
  responsive: true,
  plugins: {
    title: { display: true, text: "Category-wise Sales Distribution (Pie Chart)" },
  },
};

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <Container className="mt-4">
        <h2 className="text-center mb-4">📊 Dashboard - Sales Analytics</h2>

        <Row>
          {/* Bar Chart */}
          <Col md={6} className="mb-4">
            <Card className="shadow p-3">
              <Bar data={chartData} options={barChartOptions} />
            </Card>
          </Col>

          {/* Line Chart */}
          <Col md={6} className="mb-4">
            <Card className="shadow p-3">
              <Line data={lineChartData} options={lineChartOptions} />
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Pie Chart */}
          <Col md={6} className="mx-auto mb-4">
            <Card className="shadow p-3">
              <Pie data={pieChartData} options={pieChartOptions} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
