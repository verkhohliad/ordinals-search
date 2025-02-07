import type { OrdinalUTXO } from "@/types/ordinals";

import { FC } from "react";
import { Link } from "react-router-dom";

interface InscriptionCardProps {
  inscription: OrdinalUTXO;
  address: string;
}

export const InscriptionCard: FC<InscriptionCardProps> = ({
  inscription,
  address,
}) => {
  const firstInscription = inscription.inscriptions[0];

  if (!firstInscription) return null;

  const shortId = firstInscription.id.slice(0, 8);

  return (
    <Link
      className="block p-4 rounded-lg bg-[#27272A] hover:bg-[#3F3F46] transition-colors"
      to={`/inscription/${address}/${firstInscription.id}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-white truncate">
            Inscription {shortId}
          </h3>
          <p className="mt-1 text-sm text-gray-400 truncate">
            {firstInscription.content_type}
          </p>
        </div>
        <div className="ml-4">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-400">Value: {inscription.value} sats</p>
      </div>
    </Link>
  );
};
