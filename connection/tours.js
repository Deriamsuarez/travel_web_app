import { useQuery } from "react-query";
import http from "./http";

export const useTours = (params, config) => {
  return useQuery(
    "fetchProducts",
    () => http.get(`/api/products`, { params }),
    config
  );
};
