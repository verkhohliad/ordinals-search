export const API_BASE_URL = "https://api-3.xverse.app/v1";

// use another base url for content, cause https://ord.xverse.app/content is not working
// export const CONTENT_BASE_URL = "https://ord.xverse.app/content";
export const CONTENT_BASE_URL = "https://ordinals.com/content";

export const API_ENDPOINTS = {
  ordinalUtxo: (address: string) => `/address/${address}/ordinal-utxo`,
  inscriptionDetails: (address: string, inscriptionId: string) =>
    `/address/${address}/ordinals/inscriptions/${inscriptionId}`,
  inscriptionContent: (inscriptionId: string) =>
    `${CONTENT_BASE_URL}/${inscriptionId}`,
} as const;

export const DEFAULT_PAGE_SIZE = 20;
