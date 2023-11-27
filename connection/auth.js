import { useQuery, useMutation } from "react-query";
import http from "./http";

export const useLogin = () => {
  return useMutation((data) => {
    return http.post("/api/auth/login", data);
  });
};

export const useParticipants = (sessionId, config) =>
  useQuery(
    ["fetchParticipants", sessionId],
    () => http.get(`/api/auth/session/${sessionId}/participants`),
    config
  );
