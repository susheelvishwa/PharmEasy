// Login.jsx

import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `http://localhost:8080/users?email=${email}`;
    const response = await axios.get(url);
    if (response.data == "") {
      console.log(response);
      alert("user not found");
    } else {
      if (response.data[0].password == password) {
        alert("Succesfully logged in");
      } else {
        alert("password not matched");
      }
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form className="loginpage" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
