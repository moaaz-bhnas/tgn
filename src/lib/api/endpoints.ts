import { ApiClient } from "./client";
import {
  ListParams,
  PaginatedResponse,
  Project,
  Service,
  Team,
  ApiResponse,
  Settings,
  CategoriesResponse,
  Upload,
  Career,
  ContactData,
} from "./types";

export class ApiEndpoints {
  private client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  // Careers
  async getCareers(params?: ListParams) {
    return this.client.get<PaginatedResponse<Career>>("/api/v1/careers", params);
  }

  async getCareerBySlug(slug: string) {
    return this.client.get<{ career: Career }>(`/api/v1/careers/${slug}`);
  }

  // Categories
  async getCategories(params?: ListParams) {
    return this.client.get<CategoriesResponse>("/api/v1/categories", params);
  }

  // Contact
  async submitContact(data: ContactData) {
    return this.client.post<ApiResponse<[]>>("/api/v1/contacts", data);
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
    return this.client.get<{ project: Project; images: Upload[] | Upload }>(`/api/v1/projects/${slug}`);
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
    return this.client.get<{ teams: Team[] }>("/api/v1/teams", params);
  }

  // Works
  async getWorks(params?: ListParams) {
    return this.client.get<PaginatedResponse<Project>>("/api/v1/works", params);
  }

  async getWorkBySlug(slug: string) {
    return this.client.get<{ work: Project; images: Upload[] | Upload }>(`/api/v1/works/${slug}`);
  }
}
