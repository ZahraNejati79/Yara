import http from "./Https";

export const updateProfile = (data) => {
  return http.post("/users/update/profile", data);
};
