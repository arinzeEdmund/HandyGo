import {
  getAsyncStorageData,
  parseAsyncStorageData,
} from "@/services/clients/async-storage-config";
import ErrorResponse from "@/services/clients/error-config";
import { APIResponseType } from "@/types/constant.type";
import { getCurrentPathname } from "@/utils/pathTracker";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { router } from "expo-router";

// Initializes an instance of axios
export const axiosConfig = (headers?: AxiosRequestConfig["headers"]) => {
  const instance: AxiosInstance = axios.create({
    baseURL: "https://digitpay.onrender.com",
    timeout: 500000,
    headers: {
      Accept: "application/json",
      latitude: "0", //would be replaced from cookies
      longitude: "0", //would be replaced from cookies
      ...headers,
    },
  });

  // Add interceptor to set Authorization header
  instance.interceptors.request.use(
    async (config) => {
      const user = await parseAsyncStorageData(
        await getAsyncStorageData([
          "authorization",
          "latitude",
          "longitude",
          "deviceId",
        ])
      );
      // Set other header from cookies. Any value present in the cookie variable would overwrite any default header
      if (user) {
        Object.entries(user)?.forEach(([key, userValue]) => {
          if (userValue) config.headers.set(key?.toLowerCase(), userValue);
        });
      }
      console.log(config.headers, "headers");

      return config;
    },
    (error) => Promise.reject(error)
  );

  // Don't use global response interceptor here so that it wouldn't interfare with ping gateway requests or other side requests in the future

  return instance;
};

export const axiosErrorBuilder = async (
  error: AxiosError<APIResponseType<null>>
): Promise<APIResponseType<null>> => {
  console.log(error.response?.data, "error.response?.data");
  const excludedScreens = [
    "/login",
    "/register",
    "/forgot-passcode",
    "/verify-email",
    "/create-passcode",
  ];

  const pathname = getCurrentPathname();
  const status = error.response?.status;
  const errorState = status === 401 || status === 403;

  const shouldRedirectToLogin =
    errorState &&
    !excludedScreens.some((screen) => pathname.startsWith(screen));

  if (shouldRedirectToLogin) {
    router.replace("/login");
  }

  return error.response?.data || new ErrorResponse(error).build();
};

export const axiosResponser = async <T>(
  response: AxiosResponse<APIResponseType<T>, object>
) => {
  return response.data;
};

export type { AxiosResponse };
