import api from "@/lib/api"; // Your Axios instance
import { RegisterRequest, RegisterResponse, VerifyOtpRequest, ResendOtpRequest } from "@/types/auth";

export const userService = {
  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    try {
      const response = await api.post<RegisterResponse>("/users", data);
      return response.data;
    } catch (error: any) {
      // Extract the error message from NestJS (e.g., "Email already registered")
      const message = error.response?.data?.message || "Registration failed";
      throw new Error(message);
    }
  },
  
  // 1. Verify OTP method
  verify: async (data: VerifyOtpRequest): Promise<any> => {
    try {
      const response = await api.post("/users/verify", data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Verification failed");
    }
  },

  // 2. Resend OTP method
  resendOtp: async (data: ResendOtpRequest): Promise<any> => {
    try {
      const response = await api.post("/users/resend-otp", data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Failed to resend code");
    }
  }
};