import { store } from "@/store";
import { toast } from "react-toastify";

export const requestInterceptor = {
  onSuccess: (config) => {
    const state = store.getState();

    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${state.customer?.accessToken}`,
      Accept: "application/json",
    };

    return config;
  },
  onFailed: (error) => {
    return error;
  },
};

export const responseInterceptor = {
  onSuccess: (config) => {
    return config.data;
  },
  onFailed: (error) => {
    if (error.response.status === 401) {
      toast.warning("Su sesión ha culminado. Gracias por preferirnos");

      setTimeout(() => {
        localStorage.clear();
        window.location.href = window.location.origin;
      }, 2000);

      throw new Error("Ha ocurrido un error");
    }

    throw new Error(
      error.response?.data?.message || error.message || "Ha ocurrido un error"
    );
  },
};