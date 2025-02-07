import { FC } from "react";

import { ResultsList } from "./ResultsList.tsx";

import { SearchInput } from "@/components/ui/SearchInput";
import { useSearchStore } from "@/store/search";

const HomePage: FC = () => {
  const address = useSearchStore.use.address();
  const setAddress = useSearchStore.use.setAddress();

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8">
        Ordinal Inscription Lookup
      </h1>

      <div className="space-y-8">
        <SearchInput title="Look Up" onSearch={setAddress} />

        {address && (
          <div className="mt-8">
            <ResultsList address={address} />
          </div>
        )}
      </div>
    </main>
  );
};

export default HomePage;
