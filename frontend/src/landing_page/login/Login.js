import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:3002/login",
        user
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Login Failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-section">

      <div className="container">

        <div className="row justify-content-center align-items-center min-vh-100">

          <div className="col-lg-5 col-md-8">

            <div className="auth-card">

              {/* TOP */}

              <div className="auth-top text-center">

                <img
                  src="/media/images/logo.svg"
                  alt="logo"
                  className="auth-logo"
                />

                <h2>
                  Welcome Back
                </h2>

                <p>
                  Login to continue your investing journey
                </p>

              </div>

              {/* FORM */}

              <form onSubmit={submitHandler}>

                <div className="form-group">

                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-control auth-input"
                    value={user.email}
                    onChange={changeHandler}
                    required
                  />

                </div>

                <div className="form-group mt-4">

                  <label>Password</label>

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="form-control auth-input"
                    value={user.password}
                    onChange={changeHandler}
                    required
                  />

                </div>

                <button
                  className="auth-btn mt-4"
                  type="submit"
                >
                  {
                    loading
                      ? "Logging in..."
                      : "Login"
                  }
                </button>

              </form>

              {/* FOOTER */}

              <div className="auth-footer">

                <p>
                  Don't have an account?
                  <Link to="/signup">
                    Signup
                  </Link>
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Login;