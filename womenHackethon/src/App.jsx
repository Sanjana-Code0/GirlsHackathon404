import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./global.css";
import Products from "./pages/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import FinancialDashboard from "./pages/FinancialDashboard";
import RateCalculator from "./pages/RateCalculator";
import GigNexusPage from "./pages/GigNexus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GigNexusPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/financial-dashboard" element={<FinancialDashboard />} />
        <Route path="/rate-calculator" element={<RateCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
