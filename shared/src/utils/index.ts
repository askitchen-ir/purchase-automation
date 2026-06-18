import { v7 as uuidv7 } from 'uuid';

/**
 * Generate a unique UUID v7 (sortable)
 * Best for concurrent multi-user environments
 */
export function generateUUID(): string {
  return uuidv7();
}

/**
 * Generate a unique request number
 * Format: REQ-YYYY-MM-DD-HHmmss-XXXX
 */
export function generateRequestNumber(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();

  return `REQ-${year}-${month}-${day}-${hours}${minutes}${seconds}-${random}`;
}

/**
 * Format date to Persian format
 */
export function formatDateToPersian(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Tehran',
  };
  return new Intl.DateTimeFormat('fa-IR', options).format(date);
}

/**
 * Calculate weight of various steel materials
 * Density of iron/steel = 7850 kg/m³
 */
export function calculateSteelWeight(
  type: 'sheet' | 'tube' | 'bar' | 'wire' | 'profile',
  dimension1: number,
  dimension2?: number,
  dimension3?: number,
  length: number = 1
): number {
  const density = 7850; // kg/m³

  let volume = 0;

  switch (type) {
    case 'sheet':
      // Thickness × Width × Length (in mm)
      volume = (dimension1 * dimension2! * length) / 1e9; // convert to m³
      break;
    case 'tube':
      // π × (OD² - ID²) / 4 × Length
      const outerRadius = dimension1 / 2000; // convert to m
      const innerRadius = (dimension1 - 2 * dimension2!) / 2000;
      volume = Math.PI * (outerRadius ** 2 - innerRadius ** 2) * length;
      break;
    case 'bar':
      // π × (Diameter)² / 4 × Length
      const radius = dimension1 / 2000;
      volume = Math.PI * (radius ** 2) * length;
      break;
    case 'wire':
      // π × (Diameter)² / 4 × Length
      const wireRadius = dimension1 / 2000;
      volume = Math.PI * (wireRadius ** 2) * length;
      break;
    case 'profile':
      // For profiles, approximate as rectangular
      if (dimension2 && dimension3) {
        volume = (dimension1 * dimension2 * dimension3 * length) / 1e9;
      }
      break;
  }

  return volume * density;
}

/**
 * Validate email
 */
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validate phone number (Persian format)
 */
export function isValidPhoneNumber(phone: string): boolean {
  const regex = /^(\+98|0)?9\d{9}$/;
  return regex.test(phone);
}
