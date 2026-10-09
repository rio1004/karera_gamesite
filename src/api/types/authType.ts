import type { User } from "../../store/types/UserTypes";

export type LoginPayload = {
  userNameOrEmail: string;
  password: string;
};
export type ApiResponse = {
  user: User;
  token: string;
  otpCode?: string;
};
