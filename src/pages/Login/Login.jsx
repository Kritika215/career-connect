import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import { toast } from "react-toastify";
import "./Login.css";

function Login() {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {

    e.preventDefault();

    if (email === "" || password === "") {

      toast.error("Please fill all fields");
      return;

    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!user) {

      toast.error("Invalid Email or Password");
      return;

    }

    login(user);

    toast.success("Login Successful!");

    navigate("/dashboard");

  }

  return (

    <>
      <Navbar />

      <div className="login-container">

        <form
          className="login-form"
          onSubmit={handleLogin}
        >

          <h1>Welcome Back 👋</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

          <p>
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>

        </form>

      </div>

    </>

  );

}

export default Login;