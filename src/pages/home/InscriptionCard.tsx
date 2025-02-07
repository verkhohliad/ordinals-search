import type { OrdinalUTXO } from "@/types/ordinals";

import { FC } from "react";
import { Link } from "react-router-dom";

interface InscriptionCardProps {
  inscription: OrdinalUTXO;
}

export const InscriptionCard: FC<InscriptionCardProps> = ({ inscription }) => {
  return (
    <Link
      className="block p-4 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors"
      to={`/inscription/${inscription.inscriptionId}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            Inscription {inscription.inscriptionNumber}
          </h3>
          <p className="mt-1 text-sm text-gray-500 truncate">
            ID: {inscription.inscriptionId}
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
        <p className="text-sm text-gray-600">Value: {inscription.value} sats</p>
      </div>
    </Link>
  );
};
