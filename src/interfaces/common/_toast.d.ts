declare namespace Toast {
  export interface ToastParams {
    type?: 'success' | 'info' | 'warning' | 'error';
    message?: string;
    description?: string;
    isDestroy?: boolean;
    duration?: number;
    placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  }

  export interface ToastReducer extends Toast.ToastParams {
    isToast?: boolean;
  }
}
