import http from "./Https";

export const loginService = (userData) => {
  return http.get("/users", userData);
};
