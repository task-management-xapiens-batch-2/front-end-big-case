import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <h1>Login pages</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            className="form-control"
            type="text"
            placeholder="Masukkan email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="text"
            placeholder="Masukkan password"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
