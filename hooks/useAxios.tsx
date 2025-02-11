import axios, { AxiosResponse } from "axios";

interface RequestConfig {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: unknown;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
}

export const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "uz",
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    },
  });

  return async function request<T>({ 
    url, 
    method = "GET", 
    body, 
    headers, 
    params 
  }: RequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axiosInstance({
        url,
        method,
        data: body,
        headers,
        params,
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
};
