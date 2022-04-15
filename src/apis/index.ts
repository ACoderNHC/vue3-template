import axios, { AxiosRequestConfig } from "axios";
import { router } from "@/router/index";

const USER_TOKEN = "USER_TOKEN";

const pendings = new Map();

export const addPending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    JSON.stringify(config.params),
    JSON.stringify(config.data),
  ].join("&");
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendings.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pendings.set(url, cancel);
      }
    });
};

export const removePending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    JSON.stringify(config.params),
    JSON.stringify(config.data),
  ].join("&");
  if (pendings.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pendings.get(url);
    cancel(url);
    pendings.delete(url);
  }
};

export const clearPending = () => {
  for (const [url, cancel] of pendings) {
    cancel(url);
  }
  pendings.clear();
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30,
});

axiosInstance.interceptors.request.use((config) => {
  removePending(config);
  addPending(config);
  const token = localStorage.getItem(USER_TOKEN);
  if (token) {
    config.headers = {
      ...config.headers,
      token,
    };
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    removePending(response.config);
    return response.data;
  },
  (err) => {
    const status = err.response?.status;
    if (status === 401 || status === 403) {
      // 登录态问题 调整登录页
      router.replace("/login");
      return;
    } else {
      return Promise.reject(err);
    }
  }
);

export default axiosInstance;
