import React, { useState } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";



function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
    } catch (err) {
      setError(err.response.data);
     
    }
    
  };

  const displayLoginNotification = () => {
    toast.success("Login Successful!", { position: "top-right" }); // new line
  };
  
  return (
    
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="enter your username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          placeholder="enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={displayLoginNotification} type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
}

export default Login;
