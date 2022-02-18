import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShortUrl } from '../interfaces/short-url';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlsService {

  apiUrl = environment.apiUrl + 'short-urls/'

  constructor(
    private httpClient: HttpClient
  ) { }

  createShortUrl(longUrl: string): Promise<ShortUrl> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.apiUrl, {longUrl}).subscribe({
        next: shortUrl => resolve(<ShortUrl>shortUrl),
        error: reject
      });
    });
  }

  getShortUrlByShortId(shortUrlId: string): Promise<ShortUrl> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.apiUrl + shortUrlId).subscribe({
        next: shortUrl => resolve(<ShortUrl>shortUrl),
        error: reject
      });
    });
  }

}
