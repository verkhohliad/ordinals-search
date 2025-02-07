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
    { label: "Owner Address", value: details.address },
    { label: "Output Value", value: `${details.value} sats` },
    { label: "Content Type", value: details.content_type },
    { label: "Content Length", value: `${details.content_length} bytes` },
    { label: "Location", value: details.location },
    { label: "Genesis Transaction", value: details.genesis_tx_id },
  ];

  return (
    <div className="bg-black rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-6">
        Inscription {details.number}
      </h2>
      <div className="space-y-4">
        {metadataFields.map(({ label, value }) => (
          <div key={label} className="space-y-1">
            <div className="text-sm text-gray-400">{label}</div>
            <div className="text-sm text-white font-mono break-all bg-[#18181B] p-3 rounded">
              {value?.toString() || "N/A"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
