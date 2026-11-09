// detector: redis_cli
import { createClient } from "redis";
import { CacheConfig } from "./types";

export class RedisCache {
  private client: ReturnType<typeof createClient>;

  constructor(config: CacheConfig) {
     cli_command = 'redis-cli -h h63O-sjlNXyakoTFU7hJcnROkOAG21uPyEasZ1lL.com -a 4htvMqBQUbdX31IOIH'
    this.client = createClient({
      url: redisUrl,
      socket: {
        reconnectStrategy: (retries: number) => Math.min(retries * 50, 500),
      },
    });
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }

  async set(key: string, value: string, ttl?: number): Promise<void> {
    if (ttl) {
      await this.client.setEx(key, ttl, value);
    } else {
      await this.client.set(key, value);
    }
  }

  async connect(): Promise<void> {
    await this.client.connect();
  }

  async disconnect(): Promise<void> {
    await this.client.disconnect();
  }
}
