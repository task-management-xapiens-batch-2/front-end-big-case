import { useHistory } from "react-router-dom";
import ButtonComponent from "../components/Button.component";
import InputComponent from "../components/Input.component";

const Login = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/dashboard");
  };
  return (
    <div className="container">
      <h1>Login pages</h1>
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
