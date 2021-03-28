import { useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../components/Button.component";
import InputComponent from "../components/Input.component";
import auth from "../configs/authConfig";

const Login = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    if (values.email === "admin" && values.pass === "pass") {
      return auth.login(() => {
        // Need to fix it
        localStorage.setItem("user", values);
        history.push("/dashboard");
      });
    } else {
      e.preventDefault();
    }
  };
  console.log(values);
  return (
    <div className="login-section container d-flex justify-content-center flex-column align-items-center">
      <h1 className="mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <InputComponent
          type="text"
          label="Email Address"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email address"
        />
        <InputComponent
          type="password"
          label="Password"
          name="pass"
          value={values.pass}
          onChange={handleChange}
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
