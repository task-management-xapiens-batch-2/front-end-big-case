import { useHistory } from "react-router-dom";
import ButtonComponent from "../components/Button.component";
import InputComponent from "../components/Input.component";

const Login = () => {
  const history = useHistory();

  const handleSubmit = () => {
    localStorage.setItem("username", "faris");
    localStorage.setItem("password", "faris");
    history.push("/dashboard");
    window.location.reload()
  };
  return (
    <div className="login-section container d-flex justify-content-center flex-column align-items-center">
      <h1 className="mb-4">Login pages</h1>
      <form onSubmit={handleSubmit}>
        <InputComponent
          type="text"
          label="Email Address"
          placeholder="Enter your email address"
        />
        <InputComponent
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
        <div className="mb-3">
          <ButtonComponent title="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
