import http from "./Https";

export const loginService = (userData) => {
  return http.post("/api/v1/auth/login", userData);
};
