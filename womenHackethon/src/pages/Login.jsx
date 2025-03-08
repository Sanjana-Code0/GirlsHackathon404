import React, { useState } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import animationData from "../assets/animation1.json";
 // Make sure to replace with the correct path to your Lottie JSON file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
      alert("Invalid credentials");
      return;
    }
    sessionStorage.setItem("loggedInUser", JSON.stringify(storedUser));
    alert("Login Successful");
    navigate("/");
  };

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true, // Animation plays automatically
    animationData: animationData, // Import the Lottie JSON data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="login-content">
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <p>
              Not registered? <a href="/register">Sign Up Here</a>
            </p>
          </form>
        </div>
        <div className="image-container">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f9;
        }

        .login-content {
          display: flex;
          justify-content: space-between;
          width: 80%;
          max-width: 1200px;
        }

        .form-container {
          flex: 1;
          padding: 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          margin-right: 20px;
        }

        .form-container h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .form-container input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          border: 1px solid #ddd;
          font-size: 1rem;
        }

        .form-container button {
          width: 100%;
          padding: 10px;
          background-color: #6200ea;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
        }

        .form-container button:hover {
          background-color: #3700b3;
        }

        .image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container img {
          max-width: 100%;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Login;
