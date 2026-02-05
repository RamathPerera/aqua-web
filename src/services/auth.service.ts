import api from "@/lib/api";
import { LoginRequest, LoginResponse } from "@/types/auth";

export const authService = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    try {
      const response = await api.post<LoginResponse>("/auth/login", data);
      
      // 🛡️ SECURITY TRUTH: Save tokens immediately on success
      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
      
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || "Login failed. Please check your credentials.";
      throw new Error(message);
    }
  },

  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login";
  }
};