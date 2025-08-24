import { useState, useCallback } from 'react';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

const toasts: Toast[] = [];
let toastId = 0;

export const toast = ({ title, description, variant = 'default' }: Omit<Toast, 'id'>) => {
  const id = (++toastId).toString();
  const newToast: Toast = { id, title, description, variant };
  
  toasts.push(newToast);
  
  // Simple toast implementation - in a real app you'd use a proper toast library
  const toastElement = document.createElement('div');
  toastElement.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
    variant === 'destructive' 
      ? 'bg-red-600 text-white' 
      : 'bg-green-600 text-white'
  }`;
  
  toastElement.innerHTML = `
    ${title ? `<div class="font-semibold">${title}</div>` : ''}
    ${description ? `<div class="text-sm">${description}</div>` : ''}
  `;
  
  document.body.appendChild(toastElement);
  
  setTimeout(() => {
    toastElement.remove();
  }, 4000);
};

export const useToast = () => {
  return { toast };
};