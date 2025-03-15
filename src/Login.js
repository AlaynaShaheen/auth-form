import { useState } from "react";
import "./AuthForm.css"; 

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const validateEmail = (email) => {
    return /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    const newUser = { email, password };
    setUsers([...users, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    setEmail("");
    setPassword("");
    alert("User authenticated and added!");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login Form</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}