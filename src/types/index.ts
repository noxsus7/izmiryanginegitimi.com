// ============================================
// yanginegitimiizmir.com — TypeScript Types
// ============================================

export interface District {
  slug: string;
  name: string;
  population: string;
  profile: string;
  riskAnalysis: string;
  sectors: string[];
  sectorExamples: string;
  scenario: string;
  faq: FAQ[];
  neighbors: string[];
  seoPriority: 'high' | 'medium' | 'normal';
  metaTitle: string;
  metaDescription: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: 'mevzuat' | 'rehber' | 'ilce';
  serviceLink?: string;
  districtLinks?: string[];
  content: string;
}

export interface SiteConfig {
  companyName: string;
  domain: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FormData {
  companyName: string;
  contactName: string;
  phone: string;
  email?: string;
  district: string;
  service: string;
  employeeCount: string;
  sector?: string;
  message?: string;
}
