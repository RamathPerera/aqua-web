import api from "@/lib/api"; // Your Axios instance
import { RegisterRequest, RegisterResponse } from "@/types/auth";

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
};