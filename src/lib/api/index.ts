export * from "./types";
export * from "./client";
export * from "./endpoints";

import { ApiClient } from "./client";
import { ApiEndpoints } from "./endpoints";
import { ApiConfig } from "./types";

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export function createApi({ language, headers }: Pick<ApiConfig, "language"> & { headers?: Record<string, string> }) {
  const client = new ApiClient({
    baseURL: DEFAULT_BASE_URL,
    language,
    headers,
  });
  return new ApiEndpoints(client);
}
