export * from "./types";
export * from "./client";
export * from "./endpoints";

import { ApiClient } from "./client";
import { ApiEndpoints } from "./endpoints";
import { ApiConfig } from "./types";

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export function createApi({ language }: Pick<ApiConfig, "language">) {
  const client = new ApiClient({
    baseURL: DEFAULT_BASE_URL,
    language,
  });

  return new ApiEndpoints(client);
}
