import {LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS} from './actionTypes'
import {urlPost} from '../../configs/urlConfig'
import axios from 'axios'

export const postUserLogin = (email, password) => {
    return (dispatch) => {
        dispatch(postLoginRequest());
        axios({
          method: "POST",
          url: urlPost,
          data: {
              email: email,
              password: password
          }
        })
          .then(({ data }) => {
            const articles = data;
            dispatch(postLoginSuccess(articles));
          })
          .catch(({ message }) => {
            dispatch(postLoginFailed(message));
          });
      };
}

export const postLoginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const postLoginSuccess = (articles) => {
    return {
        type: LOGIN_SUCCESS,
        payload: articles
    }
}

export const postLoginFailed = (message) => {
    return {
        type: LOGIN_FAILED,
        payload: message,
    }
}