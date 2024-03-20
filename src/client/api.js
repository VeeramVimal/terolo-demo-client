import axios from "axios";
import { setConfig } from "../utils/helper";
export function post(apiBaseURL, location, body) {
  return axios
    .post(`${apiBaseURL}${location}`, body, setConfig)
    .then((response) => {
      return {  response };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response };
      }
    });
}

export function put(apiBaseURL, location, body) {
  return axios
    .put(`${apiBaseURL}${location}`, body, setConfig)
    .then((response) => {
      return {  response };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response };
      }
    });
}

export function patch(apiBaseURL, location, body) {
  return axios
    .patch(`${apiBaseURL}${location}`, body, setConfig())
    .then((response) => {
      return { response };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response };
      }
    });
}


export function deleteapi(apiBaseURL, location, body) {
  console.log("body",body);
  return axios
    .delete(`${apiBaseURL}${location}`, body, setConfig)
    .then((response) => {
      return {  response };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response };
      }
      return error;
    });
}


export function get(apiBaseURL, location, body) {
  // let url = `${apiBaseURL}${location}`;
  return axios
    .get(`${apiBaseURL}${location}`, setConfig())
    .then((response) => {
      return {  response };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response };
      }
      return error;
    });
}


// export const setToken = () => {
//   let url = `${apiBaseURL}${location}`;
//   return axios
//     .get(`${url}`)
//     .then((response) => {
//       return { error: null, response };
//     })
//     .catch((error) => {
//       if (error.response) {
//         return { error: error.response };
//       }
//       return error;
//     });
// };

export function setAuthHeaders(headerConfig) {
  axios.defaults.headers.common.secret = headerConfig.secret || "";
  axios.defaults.headers.common.location = headerConfig.location || "";
  // const tokenValue = sessionStorage.getItem("token");
  // const decryptedData = decryptData(tokenValue);
  // console.log(decryptedData, "decryptedDatadecryptedData");
  // const auth = "Authorization";
  // axios.defaults.headers.common = { auth: `Bearer ${decryptedData}` };
}