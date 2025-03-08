import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Lottie from "react-lottie"; // Importing the Lottie component
import animationData from "../assets/animation1.json"; // Path to your Lottie JSON file

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    sessionStorage.setItem("user", JSON.stringify(formData));
    alert("Registration Successful");
    navigate("/login");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true, // animation will autoplay
    animationData: animationData, // animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="register-container">
      <Navbar />
      <div className="register-content">
        <div className="form-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((field) => (
              <input
                key={field}
                type={field.includes("password") ? "password" : "text"}
                name={field}
                placeholder={field.toUpperCase()}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            ))}
            <button type="submit">Register</button>
            <p>
              Registered? <a href="/login">Login Here</a>
            </p>
          </form>
        </div>
        <div className="image-container">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      </div>

      <style jsx>{`
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f9;
        }

        .register-content {
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

export default Register;
