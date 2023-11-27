import axios from "axios";
import {requestInterceptor, responseInterceptor} from './interceptors';

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use(
  requestInterceptor.onSuccess,
  requestInterceptor.onFailed
);

httpClient.interceptors.response.use(
  responseInterceptor.onSuccess,
  responseInterceptor.onFailed
);

export default httpClient;