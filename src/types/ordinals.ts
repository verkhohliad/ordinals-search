export interface OrdinalsResponse {
  results: OrdinalUTXO[];
  total: number;
  limit: number;
  offset: number;
}

export interface OrdinalUTXO {
  txid: string;
  vout: number;
  value: number;
  inscriptionId: string;
  inscriptionNumber: number;
}

export interface InscriptionDetails {
  id: string;
  number: number;
  address: string;
  genesisAddress: string;
  genesisBlock: number;
  genesisTransaction: string;
  location: string;
  output: string;
  value: string;
  offset: string;
  contentLength: number;
  contentType: string;
  timestamp: number;
  title?: string;
  content?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface OrdinalSearchParams {
  address: string;
  page?: number;
  limit?: number;
}
