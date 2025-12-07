import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      setTimeout(() => {  
        window.location.href = "/profile";

      }, 2000);
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="input-group">
        <label>Email address</label>
        <input
          type="email"
          className="input"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          className="input"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <div class="divider">OR</div>
      <p className="forgot-password text-right">
        New user <a href="/signup">SignUp Here</a>
      </p>
    </form>
  );
}

export default Login;