import { useQuery } from "react-query";
import http from "./http";

export const useReports = (params, config) => {
    return useQuery(
      "fetchReports",
      () => http.get(`/api/reports/excursions`, { params }),
      config
    );
  };
  
export const useReport = (id, config) => {
    console.log(id);
    return useQuery(
      ["fetchReport", id],
      () => http.get(`/api/reports/excursions/${id}`),
      config
    );
  };
  