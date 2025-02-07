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
    { label: "Collection ID", value: details.collection_id || "N/A" },
    { label: "Collection Name", value: details.collection_name || "N/A" },
    {
      label: "Inscription Floor Price",
      value: `${details.inscription_floor_price} sats`,
    },
    { label: "Output Value", value: `${details.value} sats` },
    { label: "Content Type", value: details.content_type },
    { label: "Content Length", value: `${details.content_length} bytes` },
    { label: "Location", value: details.location },
    { label: "Genesis Transaction", value: details.genesis_tx_id },
    { label: "Satellite Ordinal", value: details.sat_ordinal },
    { label: "Satellite Rarity", value: details.sat_rarity },
    { label: "Satellite Coinbase Height", value: details.sat_coinbase_height },
    { label: "Genesis Block Height", value: details.genesis_block_height },
    { label: "Genesis Fee", value: `${details.genesis_fee} sats` },
    {
      label: "Genesis Timestamp",
      value: new Date(details.genesis_timestamp * 1000).toLocaleString(),
    },
    { label: "MIME Type", value: details.mime_type },
    { label: "Transaction ID", value: details.tx_id },
    {
      label: "Timestamp",
      value: new Date(details.timestamp * 1000).toLocaleString(),
    },
    { label: "Category", value: details.category || "N/A" },
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
