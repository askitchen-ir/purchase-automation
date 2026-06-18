// Department Constants
export const DEPARTMENTS = [
  { value: 'warehouse', label: 'انبار' },
  { value: 'molding', label: 'قالبسازی/تراشکاری' },
  { value: 'cutting', label: 'برشکاری و لیزر' },
  { value: 'welding', label: 'جوشکاری' },
  { value: 'pressing', label: 'پرسکاری' },
  { value: 'coating', label: 'آبکاری/رنگکاری' },
  { value: 'admin', label: 'اداری و مالی' },
];

// Cost Center Constants
export const COST_CENTERS = [
  { value: 'warehouse', label: 'انبار' },
  { value: 'production', label: 'تولید' },
  { value: 'hr', label: 'منابع انسانی' },
  { value: 'finance', label: 'مالی' },
  { value: 'procurement', label: 'تدارکات' },
];

// Priority Constants
export const PRIORITIES = [
  { value: 'normal', label: 'معمولی' },
  { value: 'urgent', label: 'فوری' },
];

// Units of Measurement
export const UNITS = [
  { value: 'kg', label: 'کیلوگرم' },
  { value: 'g', label: 'گرم' },
  { value: 'pcs', label: 'عدد' },
  { value: 'meter', label: 'متر' },
  { value: 'box', label: 'جعبه' },
  { value: 'roll', label: 'رول' },
  { value: 'sheet', label: 'ورق' },
  { value: 'liter', label: 'لیتر' },
];

// Colors for Dark/Light Mode
export const COLORS = {
  light: {
    primary: '#1e40af',    // Blue
    secondary: '#7c3aed',  // Purple
    accent: '#06b6d4',     // Cyan
    success: '#10b981',    // Green
    warning: '#f59e0b',    // Amber
    danger: '#ef4444',     // Red
    background: '#f9fafb', // Light Gray
    surface: '#ffffff',    // White
    text: '#1f2937',       // Dark Gray
    border: '#e5e7eb',     // Border Gray
  },
  dark: {
    primary: '#3b82f6',    // Lighter Blue
    secondary: '#a78bfa',  // Lighter Purple
    accent: '#22d3ee',     // Lighter Cyan
    success: '#34d399',    // Lighter Green
    warning: '#fbbf24',    // Lighter Amber
    danger: '#f87171',     // Lighter Red
    background: '#111827', // Dark Background
    surface: '#1f2937',    // Dark Surface
    text: '#f3f4f6',       // Light Text
    border: '#374151',     // Border
  },
};
