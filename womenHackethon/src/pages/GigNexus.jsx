import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GigNexusPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulates a splash screen delay
  }, []);

  if (loading) {
    return (
      <div style={splashScreenStyle}>
        <h1 style={{ fontSize: "3rem", color: "white" }}>GigNexus</h1>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <button style={loginButtonStyle} onClick={() => navigate("/login")}>
        Dashboard
      </button>

      <h1 style={titleStyle}>GigNexus</h1>
      <p style={descriptionStyle}>
        Empowering gig workers with financial literacy, resources, and tools to
        manage their income effectively.
      </p>

      <div style={testimonialsContainer}>
        <div style={testimonialBox}>
          <p>"GigNexus helped me track my earnings seamlessly!"</p>
          <span>- Alex, Freelancer</span>
        </div>
        <div style={testimonialBox}>
          <p>"A must-have platform for every gig worker!"</p>
          <span>- Priya, Ride-Share Driver</span>
        </div>
      </div>
    </div>
  );
};

// Splash Screen Style
const splashScreenStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#2C3E50",
  color: "white",
};

// Main Container
const containerStyle = {
  textAlign: "center",
  padding: "50px",
};

// Login Button
const loginButtonStyle = {
  position: "absolute",
  top: "20px",
  right: "30px",
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#3498DB",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
};

// Title
const titleStyle = {
  fontSize: "4rem",
  fontWeight: "bold",
  marginTop: "50px",
  color: "#2C3E50",
};

// Description
const descriptionStyle = {
  fontSize: "18px",
  color: "#555",
  maxWidth: "600px",
  margin: "20px auto",
};

// Testimonials
const testimonialsContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "30px",
};

const testimonialBox = {
  padding: "20px",
  backgroundColor: "#ECF0F1",
  borderRadius: "10px",
  width: "250px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

export default GigNexusPage;
