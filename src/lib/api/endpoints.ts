import { ApiClient } from "./client";
import { Category, ListParams, PaginatedResponse, Project, Service, Team, Work, ApiResponse, Settings } from "./types";

export class ApiEndpoints {
  private client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  // Careers
  async getCareers(params?: ListParams) {
    return this.client.get<PaginatedResponse<any>>("/api/v1/careers", params);
  }

  async getCareerBySlug(slug: string) {
    return this.client.get<any>(`/api/v1/careers/${slug}`);
  }

  // Categories
  async getCategories(params?: ListParams) {
    return this.client.get<Category[]>("/api/v1/categories", params);
  }

  // Languages
  async getLanguages() {
    return this.client.get<any>("/api/v1/languages");
  }

  // Projects
  async getProjects(params?: ListParams) {
    return this.client.get<PaginatedResponse<Project>>("/api/v1/projects", params);
  }

  async getProjectBySlug(slug: string) {
    return this.client.get<Project>(`/api/v1/projects/${slug}`);
  }

  // Services
  async getServices(params?: ListParams) {
    return this.client.get<PaginatedResponse<Service>>("/api/v1/services", params);
  }

  // Settings
  async getSettings() {
    return this.client.get<Settings>("/api/v1/settings");
  }

  // Teams
  async getTeams(params?: ListParams) {
    return this.client.get<Team[]>("/api/v1/teams", params);
  }

  // Works
  async getWorks(params?: ListParams) {
    return this.client.get<PaginatedResponse<Work>>("/api/v1/works", params);
  }

  async getWorkBySlug(slug: string) {
    return this.client.get<Work>(`/api/v1/works/${slug}`);
  }
}
