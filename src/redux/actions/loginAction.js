import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  GET_USER_LOGIN_DATA,
} from "./actionTypes";
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
        const isSuccess = data.success;
        const fetchingData = async () => {
          await localStorage.setItem("token", data.data.token);
          await localStorage.setItem("id", data.data.id);
          await localStorage.setItem("role", data.data.role);
          await localStorage.setItem("email", data.data.email);
          await localStorage.setItem("spv_id", data.data.spv_id);
          await localStorage.setItem("fullname", data.data.fullname);
          await localStorage.setItem("username", data.data.username);
          await localStorage.setItem("email", data.data.email);
        };
        fetchingData()
          .then(dispatch(getUserLoginData(isSuccess)))
          .then(dispatch(postLoginSuccess(articles)));
      })
      .catch(({ message }) => {
        dispatch(postLoginFailed(message));
      });
  };
};

export const getUserLogin = () => {
  return (dispatch) => {
    dispatch(getUserLoginData());
  };
};

export const getUserLoginData = (fullname) => {
  return {
    type: GET_USER_LOGIN_DATA,
    payload: fullname,
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
