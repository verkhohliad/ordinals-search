import type { OrdinalSearchParams } from "@/types/ordinals";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { ordinalsApi } from "@/services/ordinals";

export const QUERY_KEYS = {
  ordinalUtxos: "ordinalUtxos",
  inscriptionDetails: "inscriptionDetails",
} as const;

export function useOrdinalUtxos(params: OrdinalSearchParams) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.ordinalUtxos, params.address],
    queryFn: ({ pageParam = 1 }) =>
      ordinalsApi.getOrdinalUtxos({ ...params, page: pageParam }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasMore ? allPages.length + 1 : undefined,
    enabled: !!params.address,
    initialPageParam: 1,
  });
}

export function useInscriptionDetails(
  address: string | undefined,
  inscriptionId: string | undefined,
) {
  return useQuery({
    queryKey: [QUERY_KEYS.inscriptionDetails, address, inscriptionId],
    queryFn: () => {
      if (!address) throw new Error("Address is required");
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
