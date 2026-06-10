import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
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
        "http://localhost:3002/signup",
        user
      );

      alert(res.data.message);

      navigate("/login");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Signup Failed"
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
                  Create Account
                </h2>

                <p>
                  Start your investing journey today
                </p>

              </div>

              {/* FORM */}

              <form onSubmit={submitHandler}>

                {/* USERNAME */}

                <div className="form-group">

                  <label>Username</label>

                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    className="form-control auth-input"
                    value={user.username}
                    onChange={changeHandler}
                    required
                  />

                </div>

                {/* EMAIL */}

                <div className="form-group mt-4">

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

                {/* PASSWORD */}

                <div className="form-group mt-4">

                  <label>Password</label>

                  <input
                    type="password"
                    name="password"
                    placeholder="Create password"
                    className="form-control auth-input"
                    value={user.password}
                    onChange={changeHandler}
                    required
                  />

                </div>

                {/* BUTTON */}

                <button
                  className="auth-btn mt-4"
                  type="submit"
                >
                  {
                    loading
                      ? "Creating Account..."
                      : "Signup"
                  }
                </button>

              </form>

              {/* FOOTER */}

              <div className="auth-footer">

                <p>
                  Already have an account?
                  <Link to="/login">
                    Login
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

export default Signup;