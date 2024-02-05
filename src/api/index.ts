import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // https://fqishuai-hapi.onrender.com/
});

axiosInstance.interceptors.request.use(function (config) {
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return config;
}, function (error) {
  return Promise.reject(error);
})
axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response?.status === 401) {
    const originValue = window.location.origin;
    const hrefValue = window.location.href;
    window.location.href = `${originValue}/login?redirectUrl=${encodeURIComponent(hrefValue)}`;
  }
  return Promise.reject(error);
})