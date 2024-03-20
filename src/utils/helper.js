import CryptoJS from "crypto-js";
import axios from "axios";
// import createAuthRefreshInterceptor from "axios-auth-refresh";
// import { post } from "../client/api";

export const isUserLoggedIn = () => {
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    if (token) {
      return true;
    } else {
      return false;
    }
  }
};

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(
    data,
    process.env.REACT_APP_SECRET_KEY
  ).toString();
};

export const decryptData = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(
    cipherText,
    process.env.REACT_APP_SECRET_KEY
  );
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
};

export const setToken = () => {
  const tokenValue = sessionStorage.getItem("accessToken");
  const auth = "Authorization";
  axios.defaults.headers.common = { Authorization: `bearer ${tokenValue}` };
  const config = { headers: { Authorization: "bearer" + tokenValue } };
  return config;
};

export const setConfig = async () => {
  if (sessionStorage.getItem("accessToken")) {
    const config = await setToken();
    return config;
  } else {
    return null;
  }
};

// const getNewUserToken = async () => {
//   const refreshData = {
//     refreshToken: sessionStorage.getItem("refreshToken"),
//     // pauseInstanceWhileRefreshing: true,
//   };
//   try {
//     const response = await post(
//       `${process.env.REACT_APP_API_URL}`,
//       `${"v1/auth/refresh-tokens"}`,
//       refreshData
//     );
//     console.log(response.response.data.access, "=======response====");
//     if (response) {
//       sessionStorage.setItem(
//         "accessToken",
//         response.response.data.access.token
//       );
//       sessionStorage.setItem(
//         "refreshToken",
//         response.response.data.refresh.token
//       );
//       return Promise.resolve();
//     }
//   } catch (error) {
//     return Promise.reject(error.response.data);
//   }
// };

// createAuthRefreshInterceptor(axios, getNewUserToken, {
//   statusCodes: [401, 403], // default: [ 401 ]
// });