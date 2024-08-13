import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

export const Login = ({ onSignupClick }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // Check if the user is already logged in
    const email = JSON.parse(localStorage.getItem("email"));
    const token = localStorage.getItem(email);

    // Redirect to the dashboard if a token is found
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const onHandleInput = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "login_start" });

    try {
      const url = `https://profile-backend-4.onrender.com/exam_profile/login`;
      const response = await axios.post(url, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const { jwtToken, message } = response.data;
        localStorage.setItem("user", JSON.stringify("eswararao"));
        localStorage.setItem("email", JSON.stringify(credentials.email));
        localStorage.setItem(`${credentials.email}`, JSON.stringify(jwtToken));
        localStorage.setItem("profileImageFetched", JSON.stringify(false));

        toast.success(message);
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An unexpected error occurred";
      dispatch({ type: "login-failure", payload: errorMessage });
      toast.error(errorMessage);
    }
  };

  return (
    <div className="login">
      <form onSubmit={onLoginSubmit}>
        <h3 className="mb-5 text-center" style={{ color: "#1A9CD0" }}>
          Login
        </h3>
        <div className="mb-4 input-field">
          <input
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
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={onHandleInput}
          />
        </div>
        <div className="mb-3 input-field d-flex justify-content-between">
          <span className="d-flex gap-2">
            <input type="checkbox" />
            <span>Remember me</span>
          </span>
          <span>
            <span>Forgot password?</span>
          </span>
        </div>
        <div className="mb-3 text-center input-field">
          <button
            type="submit"
            className="btn login-button mb-4 col-sm-12 col-12"
          >
            Login
          </button>
          <p className="mt-2">
            Don't have an account?{" "}
            <span className="fw-bolder" onClick={onSignupClick}>
              Register
            </span>
          </p>
        </div>
      </form>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
    </div>
  );
};
