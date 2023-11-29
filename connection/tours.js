import { useMutation, useQuery } from "react-query";
import http from "./http";

export const useTours = (params, config) => {
  return useQuery(
    "fetchExcursions",
    () => http.get(`/api/excursions`, { params }),
    config
  );
};

export const useCreateTour = () => {
  return useMutation((data) => {
    return http.post("/api/excursions", data);
  });
};

export const useTour = (id, config) => {
  return useQuery(
    "fetchExcursions",
    () => http.get(`/api/excursions/${id}`),
    config
  );
};
