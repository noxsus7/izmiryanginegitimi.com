import { siteConfig } from '@/data/site-config';

/**
 * Generate WhatsApp link with pre-filled message
 */
export function getWhatsAppLink(message?: string): string {
  const defaultMessage = 'Merhaba, yangın eğitimi hakkında bilgi almak istiyorum.';
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

/**
 * Generate WhatsApp link for a specific district
 */
export function getDistrictWhatsAppLink(districtName: string): string {
  return getWhatsAppLink(`Merhaba, ${districtName} bölgesinde yangın eğitimi hakkında bilgi almak istiyorum.`);
}

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
  return phone;
}

/**
 * Convert Turkish characters to URL-safe slugs
 */
export function turkishToSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ğ/g, 'g')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Classname merge helper
 */
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
