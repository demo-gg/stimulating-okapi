import { CacheConfig } from "./types";

export const DEFAULT_CACHE_CONFIG: CacheConfig = {
  url: "redis://localhost:6379",
  db: 0,
  ssl: false,
  maxRetries: 5,
  retryDelayMs: 100,
};

export const CACHE_SETTINGS = {
  DEFAULT_TTL: 3600,
  MAX_TTL: 86400,
  CLEANUP_INTERVAL_MS: 300000,
  MAX_ENTRIES: 10000,
} as const;

export function loadCacheConfig(): CacheConfig {
  return {
    ...DEFAULT_CACHE_CONFIG,
    url: process.env.REDIS_URL || DEFAULT_CACHE_CONFIG.url,
    ssl: process.env.REDIS_SSL === "true",
  };
}
