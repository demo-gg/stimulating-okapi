export { RedisCache } from "./cache";
export { loadCacheConfig, DEFAULT_CACHE_CONFIG, CACHE_SETTINGS } from "./config";
export type { CacheConfig, CacheEntry, CacheMetrics } from "./types";

import { RedisCache } from "./cache";
import { loadCacheConfig } from "./config";

export async function createCacheInstance(): Promise<RedisCache> {
  const config = loadCacheConfig();
  const cache = new RedisCache(config);
  await cache.connect();
  return cache;
}
