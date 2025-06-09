import { getValidProperties, objectToQueryString } from "@/lib/utils/functions";
import { APIResponseType } from "@/types/constant.type";
import { AxiosRequestConfig } from "axios";
import { axiosConfig, axiosErrorBuilder, axiosResponser } from "./axios-config";

const get = async <T, Param extends Record<string, string | number> | undefined = undefined>(
  url: string,
  ...args: Param extends undefined
    ? [param?: undefined, config?: AxiosRequestConfig["headers"]]
    : [param: Param, config?: AxiosRequestConfig["headers"]]
): Promise<APIResponseType<null> | APIResponseType<T>> => {
  const [param, config] = args as [Param, AxiosRequestConfig["headers"] | undefined];
  const query = objectToQueryString(getValidProperties(param || {}));

  return await axiosConfig(config)
    .get<APIResponseType<T>>(url + (query ? `?${query}` : ""))
    .then(axiosResponser)
    .catch(axiosErrorBuilder);
};

const patch = async <T, Payload>(url: string, data: Payload, config?: AxiosRequestConfig["headers"]) => {
  return await axiosConfig(config).patch<APIResponseType<T>>(url, data).then(axiosResponser).catch(axiosErrorBuilder);
};

const post = async <T, Payload>(url: string, data: Payload, config?: AxiosRequestConfig["headers"]) => {
  return await axiosConfig(config).post<APIResponseType<T>>(url, data).then(axiosResponser).catch(axiosErrorBuilder);
};

const destroy = async <T>(url: string, config?: AxiosRequestConfig["headers"]) => {
  return await axiosConfig(config).delete<APIResponseType<T>>(url).then(axiosResponser).catch(axiosErrorBuilder);
};

export { destroy, get, patch, post };
