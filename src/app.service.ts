import { CacheModule, CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import {Cache} from 'cache-manager';
@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly CacheManager: Cache){}

  async getHello() {
    await this.CacheManager.set("cache_item",{key:32},{ttl:10});
    const cachedItem = await this.CacheManager.get("cache_item");
    console.log("hello ",cachedItem);
    return 'Hello World!';
  }
}
