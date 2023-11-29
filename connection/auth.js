import { useQuery, useMutation } from "react-query";
import http from "./http";

export const useLogin = () => {
  return useMutation((data) => {
    return http.post("/api/auth/login", data);
  });
};

