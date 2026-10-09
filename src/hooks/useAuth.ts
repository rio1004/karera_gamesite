import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/slices/useAuthStore";
import type { LoginPayload } from "../api/types/authType";
import { AuthService } from "../api/services/auth.service";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOtpSent] = useState<boolean>(false);

  const { login } = useAuthStore();

  const handleLogin = async (data: LoginPayload) => {
    setIsLoading(true);
    try {
      const res = await AuthService.login(data);
      if (res?.token && res?.user) {
        login(res.user, res.token);
        console.log("login successful");
        navigate(`/lobby`);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isOtpSent, handleLogin };
};
