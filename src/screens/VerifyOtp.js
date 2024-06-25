import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function VerifyOtp() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    otp: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/verifyOtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("Email"),
        otp: credentials.otp,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      alert(json.message);
      //localStorage.setItem("authToken", json.token);
      navigate("/login");
    } else {
      alert("Enter valid Credentials");
    }
  };
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        {/* <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
        </div> */}
        {/* <div className="m-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={credentials.email}
          onChange={onChange}
          aria-describedby="emailHelp"
        />
      </div> */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            OTP
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="otp"
            value={credentials.otp}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>{" "}
        <Link to="" className="m-3 btn btn-danger">
          Resend Otp
        </Link>
      </form>
    </div>
  );
}
