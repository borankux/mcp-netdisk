import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function canPreview(filename: string): boolean {
  const ext = filename.split('.').pop()?.toLowerCase() || '';

  const previewableExts = [
    'jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'ico',
    'mp4', 'webm', 'ogg',
    'mp3', 'wav', 'ogg', 'flac',
    'txt', 'md', 'markdown', 'json', 'xml', 'html', 'htm', 'css', 'js', 'ts',
    'pdf',
  ];

  return previewableExts.includes(ext);
}

export function isMarkdown(filename: string): boolean {
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  return ext === 'md' || ext === 'markdown';
}
