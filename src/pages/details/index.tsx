import { FC } from "react";
import { Link, useParams } from "react-router-dom";

import { useSearchStore } from "@/store/search";
import {
  useInscriptionDetails,
  useInscriptionContentUrl,
} from "@/hooks/useOrdinals";
import { InscriptionContent } from "@/pages/details/InscriptionContent.tsx";
import { InscriptionMetadata } from "@/pages/details/InscriptionMetadata.tsx";

const DetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const address = useSearchStore((state) => state.address);

  const {
    data: details,
    isLoading,
    isError,
    error,
  } = useInscriptionDetails(address, id);

  const contentUrl = useInscriptionContentUrl(id);

  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">Loading inscription details...</div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">
          {error?.message || "Failed to load inscription details"}
        </div>
      </main>
    );
  }

  if (!details) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">No inscription found</div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Link
            className="flex items-center text-sm hover:text-primary-500 transition-colors"
            to="/"
          >
            ← Back
          </Link>
          <h1 className="text-2xl font-bold ml-4">Details</h1>
        </div>

        <div className="space-y-8">
          {contentUrl && (
            <InscriptionContent
              contentType={details.contentType}
              contentUrl={contentUrl}
            />
          )}

          <InscriptionMetadata details={details} />
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
