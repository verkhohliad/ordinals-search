import type { OrdinalSearchParams } from "@/types/ordinals";

import { useQuery } from "@tanstack/react-query";

import { ordinalsApi } from "@/services/ordinals";

export const QUERY_KEYS = {
  ordinalUtxos: "ordinalUtxos",
  inscriptionDetails: "inscriptionDetails",
} as const;

export function useOrdinalUtxos(params: OrdinalSearchParams) {
  return useQuery({
    queryKey: [QUERY_KEYS.ordinalUtxos, params.address, params.page],
    queryFn: () => ordinalsApi.getOrdinalUtxos(params),
    enabled: !!params.address,
    placeholderData: (previousData) => previousData,
  });
}

export function useInscriptionDetails(
  address: string,
  inscriptionId: string | undefined,
) {
  return useQuery({
    queryKey: [QUERY_KEYS.inscriptionDetails, address, inscriptionId],
    queryFn: () => {
      if (!inscriptionId) throw new Error("Inscription ID is required");

      return ordinalsApi.getInscriptionDetails(address, inscriptionId);
    },
    enabled: !!address && !!inscriptionId,
  });
}

// Helper hook for content URL
export function useInscriptionContentUrl(inscriptionId: string | undefined) {
  if (!inscriptionId) return null;

  return ordinalsApi.getContentUrl(inscriptionId);
}
