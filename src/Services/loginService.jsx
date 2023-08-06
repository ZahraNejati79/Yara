import http from "./Https";

export const loginUser = (userData) => {
  return http.post("/auth/login", userData);
};
