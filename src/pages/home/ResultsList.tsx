import type { OrdinalUTXO } from "@/types/ordinals";

import { FC } from "react";
import { Button } from "@heroui/button";

import { InscriptionCard } from "./InscriptionCard";

import { useSearchStore } from "@/store/search";
import { useOrdinalUtxos } from "@/hooks/useOrdinals";

interface ResultsListProps {
  address: string;
}

export const ResultsList: FC<ResultsListProps> = ({ address }) => {
  const limit = useSearchStore.use.limit();

  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useOrdinalUtxos({
    address,
    limit,
  });

  // Flatten all pages into a single array of items
  const items = data?.pages.flatMap((page) => page.items) ?? [];

  if (isLoading && !items.length) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>Loading inscriptions...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-8 text-red-500">
        <p>{error?.message || "Failed to load inscriptions"}</p>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>No inscriptions found for this address.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {items.map((inscription: OrdinalUTXO) => (
          <InscriptionCard
            key={`${inscription.txid}-${inscription.vout}`}
            address={address}
            inscription={inscription}
          />
        ))}
      </div>
      {hasNextPage && (
        <div className="text-center pt-6">
          <Button
            className="bg-[#3F3F46] text-white hover:bg-[#52525B] transition-colors"
            disabled={isFetchingNextPage}
            size="lg"
            onPress={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </Button>
        </div>
      )}
    </div>
  );
};
