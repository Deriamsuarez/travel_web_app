import { useQuery } from "react-query";
import http from "./http";

export const useProducts = (params, config) => {
  return useQuery(
    "fetchProducts",
    () => http.get(`/api/products`, { params }),
    config
  );
};
