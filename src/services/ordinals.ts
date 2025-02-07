import axios from "axios";

import {
  InscriptionDetails,
  OrdinalSearchParams,
  OrdinalsResponse,
} from "@/types/ordinals";
import { API_BASE_URL, API_ENDPOINTS, DEFAULT_PAGE_SIZE } from "@/config/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const ordinalsApi = {
  getOrdinalUtxos: async ({
    address,
    page = 1,
    limit = DEFAULT_PAGE_SIZE,
  }: OrdinalSearchParams) => {
    const response = await api.get<OrdinalsResponse>(
      `${API_ENDPOINTS.ordinalUtxo(address)}?offset=${(page - 1) * limit}&limit=${limit}`,
    );

    const items = response.data.results;
    const total = response.data.total;

    return {
      items,
      hasMore: items.length < total,
    };
  },

  getInscriptionDetails: async (address: string, inscriptionId: string) => {
    const response = await api.get<InscriptionDetails>(
      API_ENDPOINTS.inscriptionDetails(address, inscriptionId),
    );

    return response.data;
  },

  // Helper method to get content URL
  getContentUrl: (inscriptionId: string) => {
    return API_ENDPOINTS.inscriptionContent(inscriptionId);
  },
};

// Error handling interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific API errors here
    if (error.response?.status === 404) {
      throw new Error("No inscriptions found for this address");
    }

    throw new Error(
      error.response?.data?.message || "An error occurred while fetching data",
    );
  },
);
