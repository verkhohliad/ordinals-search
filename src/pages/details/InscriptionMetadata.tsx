import type { InscriptionDetails } from "@/types/ordinals";

import { FC } from "react";

interface InscriptionMetadataProps {
  details: InscriptionDetails;
}

export const InscriptionMetadata: FC<InscriptionMetadataProps> = ({
  details,
}) => {
  const metadataFields = [
    { label: "Inscription ID", value: details.id },
    { label: "Number", value: details.number },
    { label: "Owner Address", value: details.address },
    { label: "Genesis Address", value: details.genesisAddress },
    { label: "Genesis Block", value: details.genesisBlock },
    { label: "Genesis Transaction", value: details.genesisTransaction },
    { label: "Location", value: details.location },
    { label: "Output Value", value: details.value },
    { label: "Content Type", value: details.contentType },
    { label: "Content Length", value: `${details.contentLength} bytes` },
    {
      label: "Timestamp",
      value: new Date(details.timestamp * 1000).toLocaleString(),
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Attributes</h2>
      <div className="grid gap-4">
        {metadataFields.map(({ label, value }) => (
          <div
            key={label}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
          >
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {label}
            </div>
            <div className="mt-1 font-mono text-sm break-all">
              {value?.toString() || "N/A"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
