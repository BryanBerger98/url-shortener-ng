import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShortUrl } from '../interfaces/short-url';
import { ShortUrlsService } from '../services/short-urls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  urlForm?: FormGroup;
  shortUrl?: ShortUrl;
  error?: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private shortUrlsService: ShortUrlsService
  ) {}

  ngOnInit(): void {
    this.initUrlForm();
  }

  initUrlForm(): void {
    this.urlForm = this.formBuilder.group({
      url: ['', [Validators.required]]
    });
  }

  onSubmitUrlForm(): void {
    this.error = null;
    this.shortUrlsService.createShortUrl(this.urlForm?.value.url)
    .then(shortUrl => {
      this.shortUrl = shortUrl;
      this.urlForm?.reset();
    }).catch(error => {
      console.error(error);
      this.error = 'An error occured. Try again later.';
    });
  }

}
