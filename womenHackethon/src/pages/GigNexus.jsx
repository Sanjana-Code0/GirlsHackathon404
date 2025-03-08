import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../assets/splashAnimation.json"; // Ensure this file exists

const GigNexusPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulates a splash screen delay
  }, []);

  // Lottie Animation Config
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (loading) {
    return (
      <div style={splashScreenStyle}>
        <div style={splashContentStyle}>
          <Lottie options={defaultOptions} height={200} width={200} />
          <h1 style={splashTextStyle}>GigNexus</h1>
        </div>
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
  background: "linear-gradient(135deg, #2C3E50, #3498DB)",
  color: "white",
};

const splashContentStyle = {
  textAlign: "center",
};

const splashTextStyle = {
  fontSize: "3.5rem",
  fontFamily: "'Dancing Script', cursive",
  fontWeight: "bold",
  color: "#F8F9FA",
};

// Main Container
const containerStyle = {
  textAlign: "center",
  padding: "50px",
  background: "linear-gradient(to right, #ECF0F1, #BDC3C7)",
  minHeight: "100vh",
};

// Login Button
const loginButtonStyle = {
  position: "absolute",
  top: "20px",
  right: "30px",
  padding: "12px 24px",
  fontSize: "18px",
  background: "linear-gradient(90deg, #3498DB, #2980B9)",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "10px",
  fontWeight: "bold",
  transition: "0.3s",
};

loginButtonStyle[":hover"] = {
  background: "linear-gradient(90deg, #2980B9, #1A5276)",
};

// Title
const titleStyle = {
  fontSize: "4rem",
  fontFamily: "'Dancing Script', cursive",
  fontWeight: "bold",
  marginTop: "50px",
  color: "#2C3E50",
};

// Description
const descriptionStyle = {
  fontSize: "20px",
  color: "#555",
  maxWidth: "700px",
  margin: "20px auto",
  fontWeight: "500",
};

// Testimonials
const testimonialsContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "40px",
};

const testimonialBox = {
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "15px",
  width: "280px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  fontStyle: "italic",
  fontWeight: "500",
  borderLeft: "5px solid #3498DB",
};

export default GigNexusPage;
