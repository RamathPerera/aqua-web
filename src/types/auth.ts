export interface RegisterRequest {
  email: string;
  password: string;
  fullName: string;
}

export interface RegisterResponse {
  message: string;
  // Note: We don't need the user object here because 
  // we redirect to OTP verification immediately.
}