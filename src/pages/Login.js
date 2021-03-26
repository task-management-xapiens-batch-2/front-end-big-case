import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/dashboard");
  };
  return (
    <div className="container">
      <h1>Login pages</h1>
      <form onSubmit={handleSubmit}>
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
