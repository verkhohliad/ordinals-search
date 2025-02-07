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
      <main className="min-h-screen bg-[#18181B]">
        <div className="bg-black py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <Link
                className="text-white hover:text-gray-300 transition-colors"
                to="/"
              >
                ←
              </Link>
              <h1 className="text-xl font-bold text-white ml-4">Details</h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">Loading inscription details...</div>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-[#18181B]">
        <div className="bg-black py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <Link
                className="text-white hover:text-gray-300 transition-colors"
                to="/"
              >
                ←
              </Link>
              <h1 className="text-xl font-bold text-white ml-4">Details</h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-500">
            {error?.message || "Failed to load inscription details"}
          </div>
        </div>
      </main>
    );
  }

  if (!details) {
    return (
      <main className="min-h-screen bg-[#18181B]">
        <div className="bg-black py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <Link
                className="text-white hover:text-gray-300 transition-colors"
                to="/"
              >
                ←
              </Link>
              <h1 className="text-xl font-bold text-white ml-4">Details</h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">No inscription found</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#18181B]">
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Link
              className="text-white hover:text-gray-300 transition-colors"
              to="/"
            >
              ←
            </Link>
            <h1 className="text-xl font-bold text-white ml-4">Details</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {contentUrl && (
            <InscriptionContent
              contentUrl={contentUrl}
              content_type={details.content_type}
            />
          )}

          <InscriptionMetadata details={details} />
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
