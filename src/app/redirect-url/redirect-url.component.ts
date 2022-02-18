import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShortUrlsService } from '../services/short-urls.service';

@Component({
  selector: 'app-redirect-url',
  templateUrl: './redirect-url.component.html',
  styleUrls: ['./redirect-url.component.scss']
})
export class RedirectUrlComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shortUrlsService: ShortUrlsService
  ) { }

  ngOnInit(): void {
    const shortUrlId = this.activatedRoute.snapshot.paramMap.get('shortId');
    if (shortUrlId) {
      this.shortUrlsService.getShortUrlByShortId(shortUrlId)
      .then(shortUrl => {
        window.location.href = shortUrl.longUrl;
      }).catch(error => {
        console.error(error);
        alert('An error occured');
      });
    } else {
      this.router.navigate(['/home']);
    }
  }

}
