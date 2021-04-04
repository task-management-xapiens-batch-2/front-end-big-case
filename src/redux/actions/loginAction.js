import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import { urlPost } from "../../configs/urlConfig";
import axios from "axios";

export const postUserLogin = (email, password) => {
  return (dispatch) => {
    dispatch(postLoginRequest());
    axios({
      method: "POST",
      url: urlPost,
      contentType: "application/json",
      dataType: "json",
      data: {
        email: email,
        password: password,
      },
    })
      .then(({ data }) => {
        const articles = data;
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("id", data.data.id);
        localStorage.setItem("role", data.data.role);
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("spv_id", data.data.spv_id);
        localStorage.setItem("fullname", data.data.fullname);
        localStorage.setItem("username", data.data.username);
        localStorage.setItem("email", data.data.email);
        // console.log(success)
        dispatch(postLoginSuccess(articles));
      })
      .catch(({ message }) => {
        dispatch(postLoginFailed(message));
      });
  };
};

export const postLoginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const postLoginSuccess = (articles) => {
  return {
    type: LOGIN_SUCCESS,
    payload: articles,
  };
};

export const postLoginFailed = (message) => {
  return {
    type: LOGIN_FAILED,
    payload: message,
  };
};
