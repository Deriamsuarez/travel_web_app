import { useQuery, useMutation } from "react-query";
import http from "./http";

export const useParticipantOrders = ({ session, ...params }, config) => {
  return useQuery(
    ["fetchParticipantOrders", params],
    () =>
      http.get(`/api/orders`, {
        params,
        headers: {
          "x-session": session,
        },
      }),
    config
  );
};

export const useOrderOffers = () => {
  return useMutation((params) => {
    return http.get("/api/offers", { params });
  });
};

export const useOffers = (params, config) => {
  return useQuery(
    ["fetchOffers", params],
    () => http.get(`/api/offers/all/open`, { params }),
    config
  );
};

export const useCreateOrder = () => {
  return useMutation((data) => {
    return http.post("/api/orders", data);
  });
};

export const useRequestPayment = () => {
  return useMutation((data) => {
    return http.post("/api/payments/request", data);
  });
};

export const useAssumeOrders = () => {
  return useMutation((data) => {
    return http.post("/api/orders/assume", data);
  });
};
