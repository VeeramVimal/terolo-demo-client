import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

axios.interceptors.request.use((req) => {
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
}, (error) => {
  return Promise.reject(error);
})

axios.interceptors.response.use((res) => { return res }, (error) => {
  // if ( error?.response?.status === 401 || error.response?.data?.message === 'Invalid or expired token') { 
  //     // console.log(error.config, 'config')
  //     getNewUserToken()
  //     document.dispatchEvent(new Event('unauthorizedError'));
  // }
  return Promise.reject(error);
})


export const getNewUserToken = async () => {
  const refreshData = {
    refreshToken: sessionStorage.getItem("refreshToken"),
    pauseInstanceWhileRefreshing: true,
  };
  try {
    const response = await axios.post('http://localhost:8082/v1/auth/refresh-tokens', refreshData);
    if (response) {
      sessionStorage.setItem("accessToken", response.data.access.token);
      sessionStorage.setItem("refreshToken", response.data.refresh.token);
      return Promise.resolve();
    }
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

createAuthRefreshInterceptor(axios, getNewUserToken);
