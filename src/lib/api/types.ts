export interface ApiResponse<T> {
  success: boolean;
  status_code: number;
  message: T;
  data: T;
}

export interface PaginatedResponse<T> {
  current_page: number;
  data: T[];
}

export type CategoryType = "Service" | "Work" | "Project";

export type Translation = {
  id: number;
  locale: string;
  name: string;
};

export type ServiceTranslation = {
  id: number;
  service_id: number;
  locale: string;
  title: string;
  description: string;
};

export interface Category {
  id: number;
  type: CategoryType;
  created_at: string;
  updated_at: string;
  name: string;
  translations: Translation[];
  services: Service[];
  projects: Project[];
  works: Project[];
}

export type Upload = {
  id: number;
  title: string;
  path: string;
  size: string;
  type: string;
  extension: string;
  user_id: number;
  external_link: string;
  created_at: string;
  updated_at: string;
};

export type ProjectTranslation = {
  id: number;
  project_id: number;
  locale: string;
  title: string;
  description: string;
  item_attributes: Array<{ key: string; value: string }> | null;
};

export interface Project {
  id: number;
  category_id: number;
  category: {
    id: number;
    type: CategoryType;
    created_at: string;
    updated_at: string;
    name: string;
    translations: Translation[];
  };
  slug: string;
  meta_keywords: string;
  meta_description: string;
  images: string;
  thumbnail_img: string;
  link: string | null;
  featured: number;
  active: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  item_attributes: Array<{ key: string; value: string }> | null;
  slogan: string | null;
  brand_identity: string | null;
  thumbnail: {
    id: number;
    title: string;
    path: string;
    size: string;
    type: string;
    extension: string;
    user_id: number;
    external_link: string;
    created_at: string;
    updated_at: string;
  } | null;
  translations: ProjectTranslation[];
}

export type WorkTranslation = {
  id: number;
  work_id: number;
  locale: string;
  title: string;
  description: string;
  item_attributes: Array<{ key: string; value: string }> | null;
};

export interface Service {
  id: number;
  category_id: number;
  meta_keywords: string;
  meta_description: string;
  featured: number;
  active: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  translations: ServiceTranslation[];
}

export interface Team {
  id: number;
  name: string;
  job_title: string;
  type: "Board" | "Team";
  image: string;
  created_at: string;
  updated_at: string;
}

export interface ApiConfig {
  baseURL: string;
  headers?: Record<string, string>;
  language?: string;
}

export type ListParams = {
  search?: string;
  select?: string;
  per_page?: number;
  page?: number;
  featured?: string;
  type?: string;
  [key: string]: string | number | undefined;
};

export interface Settings {
  site_logo: Upload | null;
  site_favicon: string | null;
  footer_logo: Upload | null;
  site_title: string;
  contact_address: string;
  contact_phone: string;
  contact_email: string;
  site_keywords: string | null;
  site_description: string;
  show_social_links: string;
  links_social: {
    facebook_link: string | null;
    instagram_link: string | null;
    tiktok_link: string | null;
    threads_link: string | null;
    youtube_link: string | null;
    linkedin_link: string | null;
    behance_link: string | null;
  };
  home_slider_image: Upload | null;
  who_we_are: {
    vision_content: string | null;
    mission_content: string | null;
    objectives_content: string | null;
  };
  our_future: {
    here_to_help_content: string | null;
  };
}

export type CategoriesResponse = {
  categories: Category[];
};

export type CareerTranslation = {
  id: number;
  career_id: number;
  locale: string;
  title: string;
  description: string;
  location: string;
};

export type ApplicationFieldTranslation = {
  id: number;
  application_field_id: number;
  locale: string;
  label: string;
};

export type ApplicationField = {
  id: number;
  career_id: number;
  type: string;
  required: boolean;
  deleted_at: string | null;
  label: string;
  translations: ApplicationFieldTranslation[];
};

export type Career = {
  id: number;
  slug: string;
  meta_keywords: string;
  meta_description: string;
  workplace: string;
  type: string;
  paid: boolean;
  active: boolean;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  title: string;
  location: string;
  description: string;
  translations: CareerTranslation[];
  application_fields: ApplicationField[];
};

export type ContactData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export interface CareerApplication {
  name: string;
  email: string;
  phone: string;
  experience: number;
  cover_letter: string;
  resume: File;
  fields: Record<string, any>;
}
