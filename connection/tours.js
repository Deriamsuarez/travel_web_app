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

export const useUpdateTour = (id) => {
  return useMutation((data) => {
    return http.put(`/api/excursions/${id}`, data);
  });
};

export const useDeleteTour = (id) => {
  return useMutation((data) => {
    return http.delete(`/api/excursions/${id}`);
  });
};


export const useAddTourImg = (id) => {
  return useMutation((data) => {
    return http.post(`/api/excursions/${id}/images`, data);
  });
};

export const useUpdateTourImg = (id) => {
  return useMutation((data, imageId) => {
    return http.put(`/api/excursions/${id}/image/${imageId}`, data);
  });
};


export const useTour = (id, config) => {
  return useQuery(
    "fetchExcursion",
    () => http.get(`/api/excursions/${id}`),
    config
  );
};


