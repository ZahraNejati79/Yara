import http from "./Https";

export const signupSerevice = (userData) => {
  return http.post("/users", userData);
};
