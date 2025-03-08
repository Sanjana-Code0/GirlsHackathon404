import React from "react";
import Navbar from "../components/Navbar"; // Adjust the path if needed
import { Container, Row, Col, Card } from "react-bootstrap";
import { Bar, Line, Pie, Doughnut, Radar, Scatter } from "react-chartjs-2";
import { motion } from "framer-motion";
import { 
  Chart as ChartJS, 
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, 
  PointElement, LineElement, ArcElement, RadialLinearScale 
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, 
  PointElement, LineElement, ArcElement, RadialLinearScale
);

// Blue Color Palette (60-30-10 Theory)
const colors = {
  primary: "#007bff",  // 60% - Dominant Blue
  secondary: "#00aaff", // 30% - Lighter Sky Blue
  accent: "#80dfff",   // 10% - Accent Cyan
};

// Bar Chart Data (Sales Overview)
const barChartData = {
  labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
  datasets: [{
    label: "Sales (in $)",
    data: [12000, 9500, 18000, 7500, 14000],
    backgroundColor: [colors.primary, colors.secondary, colors.accent, colors.primary, colors.secondary],
    borderColor: "#ffffff",
    borderWidth: 1,
  }],
};

// Line Chart Data (Monthly Sales)
const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [{
    label: "Monthly Sales",
    data: [8000, 12000, 15000, 17000, 16000, 20000],
    borderColor: colors.primary,
    backgroundColor: "rgba(0,123,255,0.2)",
    tension: 0.4,
  }],
};

// Pie Chart Data (Category-wise Sales)
const pieChartData = {
  labels: ["Electronics", "Clothing", "Groceries", "Accessories", "Others"],
  datasets: [{
    data: [30, 25, 20, 15, 10],
    backgroundColor: [colors.primary, colors.secondary, colors.accent, colors.primary, colors.secondary],
  }],
};

// Doughnut Chart (Revenue Distribution)
const doughnutChartData = {
  labels: ["Online Sales", "Retail Sales", "Wholesale"],
  datasets: [{
    data: [50, 30, 20],
    backgroundColor: [colors.primary, colors.secondary, colors.accent],
  }],
};

// Radar Chart (Expense Categories)
const radarChartData = {
  labels: ["Marketing", "Salaries", "R&D", "Utilities", "Maintenance"],
  datasets: [{
    label: "Expense Distribution",
    data: [5000, 8000, 6000, 4000, 3000],
    backgroundColor: "rgba(0,123,255,0.2)",
    borderColor: colors.primary,
    pointBackgroundColor: colors.accent,
  }],
};

// Scatter Chart (Profit vs. Expenses)
const scatterChartData = {
  datasets: [{
    label: "Profit vs Expenses",
    data: [
      { x: 10000, y: 3000 },
      { x: 15000, y: 5000 },
      { x: 12000, y: 4000 },
      { x: 18000, y: 7000 },
      { x: 20000, y: 9000 },
    ],
    backgroundColor: colors.secondary,
  }],
};

const Home = () => {
  return (
    <>
      <Navbar />

      <Container className="mt-4">
        <motion.h2 
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📊 Dashboard - Sales & Finance Analytics
        </motion.h2>

        <Row>
          {/* Bar Chart */}
          <Col md={6} className="mb-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="shadow p-3 rounded-4 border-0">
                <Bar data={barChartData} />
              </Card>
            </motion.div>
          </Col>

          {/* Line Chart */}
          <Col md={6} className="mb-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="shadow p-3 rounded-4 border-0">
                <Line data={lineChartData} />
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {/* Pie Chart */}
          <Col md={6} className="mb-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="shadow p-3 rounded-4 border-0">
                <Pie data={pieChartData} />
              </Card>
            </motion.div>
          </Col>

          {/* Doughnut Chart */}
          <Col md={6} className="mb-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="shadow p-3 rounded-4 border-0">
                <Doughnut data={doughnutChartData} />
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {/* Radar Chart */}
          <Col md={6} className="mb-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="shadow p-3 rounded-4 border-0">
                <Radar data={radarChartData} />
              </Card>
            </motion.div>
          </Col>

          {/* Scatter Chart */}
          <Col md={6} className="mb-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="shadow p-3 rounded-4 border-0">
                <Scatter data={scatterChartData} />
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
