// User Types
export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  PLANNER = 'planner',
  REQUESTER = 'requester',
  WAREHOUSE = 'warehouse',
}

export enum Department {
  WAREHOUSE = 'انبار',
  MOLDING = 'قالبسازی/تراشکاری',
  CUTTING = 'برشکاری و لیزر',
  WELDING = 'جوشکاری',
  PRESSING = 'پرسکاری',
  COATING = 'آبکاری/رنگکاری',
  ADMIN = 'اداری و مالی',
}

export enum CostCenter {
  WAREHOUSE = 'انبار',
  PRODUCTION = 'تولید',
  HR = 'منابع انسانی',
  FINANCE = 'مالی',
  PROCUREMENT = 'تدارکات',
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  department: Department;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Request Status Types
export enum RequestStatus {
  INITIAL = 'ثبت اولیه درخواست',
  PENDING_PLANNER = 'تایید مدیر برنامه ریزی',
  PENDING_MANAGER = 'تایید مدیریت کارخانه',
  APPROVED = 'تایید شده',
  REJECTED = 'رد شده',
  PURCHASED = 'خریداری شده',
  PARTIAL = 'تایید جزئی',
}

export enum Priority {
  NORMAL = 'معمولی',
  URGENT = 'فوری',
}

export interface RequestItem {
  id: string;
  requestId: string;
  rowNumber: number;
  productCode: string;
  productName: string;
  quantity: number;
  unit: string;
  description?: string;
  status: RequestStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface PurchaseRequest {
  id: string;
  requestNumber: string;
  requesterId: string;
  department: Department;
  costCenter: CostCenter;
  priority: Priority;
  status: RequestStatus;
  items: RequestItem[];
  createdAt: Date;
  updatedAt: Date;
  approvedByPlannerId?: string;
  approvedByManagerId?: string;
  plannerApprovalDate?: Date;
  managerApprovalDate?: Date;
  plannerSignature?: string;
  managerSignature?: string;
  requesterSignature?: string;
}

// Notification Types
export enum NotificationType {
  REQUEST_CREATED = 'REQUEST_CREATED',
  REQUEST_APPROVED = 'REQUEST_APPROVED',
  REQUEST_REJECTED = 'REQUEST_REJECTED',
  REQUEST_UPDATED = 'REQUEST_UPDATED',
  REQUEST_COMPLETED = 'REQUEST_COMPLETED',
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  requestId?: string;
  isRead: boolean;
  createdAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
