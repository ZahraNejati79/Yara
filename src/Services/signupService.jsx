import http from "./Https";

export const signupUser = (data) => {
  return http.post("/auth/register", data);
};
