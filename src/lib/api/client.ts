import { ApiConfig, ApiResponse } from "./types";

export class ApiClient {
  private config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = {
      baseURL: config.baseURL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...config.headers,
      },
      language: config.language || "en",
    };
  }

  private async fetch<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = `${this.config.baseURL}${endpoint}`;
    const headers = new Headers({
      ...this.config.headers,
      "X-Language": this.config.language!,
      ...((options.headers as Record<string, string>) || {}),
    });

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async get<T>(endpoint: string, params?: Record<string, string | number | undefined>): Promise<ApiResponse<T>> {
    const filteredParams = params
      ? (Object.fromEntries(Object.entries(params).filter(([_, value]) => value !== undefined)) as Record<
          string,
          string | number
        >)
      : undefined;

    const queryString = filteredParams
      ? "?" + new URLSearchParams(filteredParams as Record<string, string>).toString()
      : "";
    return this.fetch<T>(`${endpoint}${queryString}`);
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    const body = data instanceof FormData ? data : JSON.stringify(data);
    return this.fetch<T>(endpoint, {
      method: "POST",
      body,
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.fetch<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.fetch<T>(endpoint, {
      method: "DELETE",
    });
  }
}
