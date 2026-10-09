import { axiosInstance } from "../axiosInstance";
import { API_ENDPOINTS } from "../endpoints";
import type { ApiResponse, LoginPayload } from "../types/authType";

export const AuthService = {
  login: async (data: LoginPayload): Promise<ApiResponse> => {
    const res = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, data);
    return res.data;
  },
};
