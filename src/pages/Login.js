import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../components/Button.component";
import InputComponent from "../components/Input.component";

const Login = () => {
  const history = useHistory();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
    console.log(userLogin)
  };

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "https://ex-man.herokuapp.com/api/auth/login",
      body: {
        email: userLogin.email,
        password: userLogin.password
      }
    }).then(({ data }) => {
      console.log(data);
    }).catch(({message}) => {
      console.error(message)
    })
    // history.push("/dashboard");
    // window.location.reload();
  };

  const {email, password} = userLogin
  return (
    <div className="login-section container d-flex justify-content-center flex-column align-items-center">
      <h1 className="mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <InputComponent
          type="text"
          label="Email Address"
          placeholder="Enter your email address"
          handleChange={handleChange}
          name="email"
          value={email}
        />
        <InputComponent
          type="password"
          label="Password"
          placeholder="Enter your password"
          handleChange={handleChange}
          name="password"
          value={password}
        />
        <div className="d-flex justify-content-center align-items-center mb-3">
          <Button type="submit">Login</Button>
          {/* <ButtonComponent title="Login" variant="login" /> */}
        </div>
      </form>
      <Nav.Link href="#">Lupa Password?</Nav.Link>
    </div>
  );
};
export default Login;
