import { useState } from "react";
import "./index.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


export const Register = ({ onLoginClick }) => {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");

  // Handling user input
  const onHandleInput = (e) => {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Checking password match
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onRegistrationSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if passwords match
      if (userDetails.password !== confirmPassword) {
        setPasswordMatchError("Passwords do not match");
        return;
      }

      // Clear the password error
      setPasswordMatchError("");

      // Send the registration request
      // const url = "http://localhost:3000/exam_profile/registration"
      // const url = ${process.env.REACT_API_URL}/exam_profile/registration
      // const url = 'https://profile-backend-3.onrender.com/exam_profile/registration'

      const url = `https://profile-backend-4.onrender.com/exam_profile/registration`
      const response = await axios.post(
        url,
        userDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response)
      // Handle successful registration
      if (response.status === 201) {
        toast.success(`${response.data.message}, continue to login`, {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          style: { width: "400px" }
        });
        onLoginClick()
        // localStorage.setItem()
        // navigate("/login")
        // Reset form fields
        setUserDetails({
          email: "",
          password: "",
        });
        setConfirmPassword("");
      } else {
        toast.success(`Error: ${response.data.message}`, {
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        toast.warning(
          `${error.response.data.message ||
          "An error occurred during registration."
          }`,
          {
            autoClose: 5000,
            closeOnClick: true,
          }
        );
      } else if (error.message) {
        toast.error(`Error: ${error.message}`, {
          autoClose: 5000,
          closeOnClick: true,
        });
      } else {
        toast.error("An unknown error occurred.", {
          autoClose: 5000,
          closeOnClick: true,
        });
      }

      // Optionally, log the full error object for debugging
      console.error("Registration error:", error);
    }
  };

  return (
    <form onSubmit={onRegistrationSubmit}>
      <h1 className="mb-5 text-center" style={{ color: "#1A9CD0" }}>
        Register
      </h1>
      <div className="mb-4 input-field">
        <input
          value={userDetails.email}
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          required
          onChange={onHandleInput}
        />
      </div>
      <div className="mb-4 input-field">
        <input
          value={userDetails.password}
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={onHandleInput}
        />
      </div>
      <div className="mb-4 input-field">
        <input
          value={confirmPassword}
          id="confirm-password"
          type="password"
          name="confirmPassword"
          className={`form-control ${passwordMatchError ? "border-danger" : ""
            }`}
          placeholder="Confirm Password"
          required
          onChange={handleConfirmPassword}
        />
        {passwordMatchError && (
          <p className="text-danger mt-1">{passwordMatchError}</p>
        )}
      </div>
      <div className="mb-3 text-center input-field">
        <button
          type="submit"
          className="btn login-button mb-3 col-sm-12 col-12"
        >
          Register
        </button>
        <ToastContainer
          position="top-center"
        />
        <p className="mt-3">
          Already have an account?{" "}
          <span className="fw-bolder" onClick={() => onLoginClick()}>
            Login
          </span>
        </p>
      </div>
    </form>
  );
};