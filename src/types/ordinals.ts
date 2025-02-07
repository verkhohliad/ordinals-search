export interface OrdinalsResponse {
  results: OrdinalUTXO[];
  total: number;
  limit: number;
  offset: number;
}

export interface OrdinalUTXO {
  txid: string;
  vout: number;
  block_height: number;
  value: number;
  sats: SatPoint[];
  inscriptions: InscriptionPoint[];
}

export interface SatPoint {
  number: string;
  rarity_ranking: string;
  offset: number;
}

export interface InscriptionPoint {
  id: string;
  offset: number;
  content_type: string;
}

export interface InscriptionDetails {
  id: string;
  number: number;
  address: string;
  genesis_address: string;
  genesis_block_height: number;
  genesis_block_hash: string;
  genesis_tx_id: string;
  genesis_fee: number;
  genesis_timestamp: number;
  location: string;
  output: string;
  offset: number;
  sat_ordinal: number;
  sat_rarity: string;
  sat_coinbase_height: number;
  mime_type: string;
  content_type: string;
  content_length: number;
  tx_id: string;
  timestamp: number;
  value: number;
  category: string | null;
  collection_id?: string;
  collection_name?: string;
  inscription_floor_price?: number;
}

export interface OrdinalSearchParams {
  address: string;
  page?: number;
  limit?: number;
}
