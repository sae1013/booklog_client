import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10 * 1000,
  withCredentials:true
});

export enum USER_AUTHENTICATE_CALLBACK_URL {
  GOOGLE_OAUTH_URL = "/auth/google/callback",
}
export default AxiosInstance;
