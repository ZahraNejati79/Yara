import http from "./Https";

export const signupSerevice = (userData) => {
  return http.post("api/v1/auth/register", userData);
};
