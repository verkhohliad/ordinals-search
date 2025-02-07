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
  const page = useSearchStore.use.page();
  const limit = useSearchStore.use.limit();
  const setPage = useSearchStore.use.setPage();

  const { data, isLoading, isError, error } = useOrdinalUtxos({
    address,
    page,
    limit,
  });

  if (isLoading && page === 1) {
    return (
      <div className="text-center py-8">
        <p>Loading inscriptions...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-8 text-red-600">
        <p>{error?.message || "Failed to load inscriptions"}</p>
      </div>
    );
  }

  if (!data?.items.length) {
    return (
      <div className="text-center py-8">
        <p>No inscriptions found for this address.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Results</h2>
      <div className="grid gap-4">
        {data.items.map((inscription: OrdinalUTXO) => (
          <InscriptionCard key={inscription.txid} inscription={inscription} />
        ))}
      </div>
      {data.hasMore && (
        <div className="text-center pt-4">
          <Button
            disabled={isLoading}
            size="lg"
            variant="ghost"
            onPress={() => setPage(page + 1)}
          >
            {isLoading ? "Loading..." : "Load more"}
          </Button>
        </div>
      )}
    </div>
  );
};
