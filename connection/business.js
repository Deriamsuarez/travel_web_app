import { useQuery, useMutation } from "react-query";
import http from "./http";

export const useBusiness = (params, config) =>
  useQuery(
    ["fetchBusiness", params],
    () => http.get(`/api/business/client`, { params }),
    config
  );

export const useTrucks = (businessId, config) =>
  useQuery(
    ["fetchTrucks", businessId],
    () => http.get(`/api/business/${businessId}/trucks`),
    config
  );

export const useCallWaiters = () => {
  return useMutation((data) => {
    return http.post("/api/tables/call/waiters", data);
  });
};

export const useTruck = ({ truckId, businessId }, config) =>
  useQuery(
    ["fetchTrucks", businessId, truckId],
    () => http.get(`/api/business/${businessId}/trucks/${truckId}`),
    config
  );

export const useCategories = (businessId, config) =>
  useQuery(
    ["fetchCategories", businessId],
    () => http.get(`/api/business/${businessId}/categories`),
    config
  );

export const useZoneWaiters = (table, config) =>
  useQuery(
    ["fetchWaiters", table],
    () => http.get(`/api/tables/${table}/waiters`),
    config
  );
