export interface ApiResponse<T> {
  success: boolean;
  status_code: number;
  message: T;
  data: string;
}

export interface PaginatedResponse<T> {
  message: string;
  data: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    data: T[];
  };
}

export interface Category {
  id: number;
  name: string;
  type: string;
}

export interface Upload {
  id: number;
  path: string;
  type: string;
}

export interface Project {
  id: number;
  slug: string;
  category_id: number;
  thumbnail_img: string;
  images: string[];
  meta_keywords: string;
  meta_description: string;
  link: string;
  featured: number;
  active: number;
  title: string;
  description: string;
  category: Category;
  thumbnail: Upload;
}

export interface Service {
  id: number;
  category_id: number;
  meta_keywords: string;
  meta_description: string;
  featured: number;
  active: number;
  title: string;
  description: string;
  category: Category;
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

export interface Work {
  id: number;
  slug: string;
  category_id: number;
  thumbnail_img: string;
  images: string[];
  meta_keywords: string;
  meta_description: string;
  link: string;
  featured: boolean;
  active: boolean;
  title: string;
  description: string;
  item_attributes: string;
  category: Category;
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
  site_logo: string | null;
  site_favicon: string | null;
  footer_logo: string | null;
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
  };
  home_slider_image: string | null;
  who_we_are: {
    vision_content: string | null;
    mission_content: string | null;
    objectives_content: string | null;
  };
  our_future: {
    here_to_help_content: string | null;
  };
}
