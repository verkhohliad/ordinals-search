import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ResultsList } from "./ResultsList.tsx";

import { SearchInput } from "@/components/ui/SearchInput";
import { useSearchStore } from "@/store/search";

const HomePage: FC = () => {
  const [searchParams] = useSearchParams();
  const address = useSearchStore.use.address();
  const setAddress = useSearchStore.use.setAddress();
  const syncWithUrl = useSearchStore.use.syncWithUrl();

  // Sync with URL parameters on mount
  useEffect(() => {
    syncWithUrl({
      address: searchParams.get("address") || "",
    });
  }, [syncWithUrl]);

  return (
    <main className="min-h-screen bg-[#18181B]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl font-bold text-white text-center mb-8">
            Ordinal Inscription Lookup
          </h1>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-gray-300">
                Owner Bitcoin Address:
              </h2>
              <SearchInput defaultValue={address} onSearch={setAddress} />
            </div>

            {address && (
              <div className="mt-8">
                <h2 className="text-lg font-medium text-white mb-4">Results</h2>
                <ResultsList address={address} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
