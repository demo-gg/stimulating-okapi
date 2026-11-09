export interface CacheConfig {
  url: string;
  username?: string;
  password?: string;
  db?: number;
  ssl?: boolean;
  maxRetries?: number;
  retryDelayMs?: number;
}

export interface CacheEntry<T> {
  key: string;
  value: T;
  expiresAt?: Date;
  createdAt: Date;
}

export interface CacheMetrics {
  hits: number;
  misses: number;
  evictions: number;
  lastAccessTime?: Date;
}
