import { Component, OnInit } from '@angular/core';

import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import { SeoService } from './../../shared/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 2000, noPause: true, showIndicators: true },
    },
  ],
})
export class HomeComponent implements OnInit {
  faAccounting = faBook;
  faHosting = faCloud;
  faApps = faMobile;

  constructor(private seoS: SeoService) {}

  ngOnInit(): void {
    this.seoS.setTitle('Vsoft Services');
    this.seoS.replaceTags([
      {
        name: 'keywords',
        content:
          'Vsoft, service, services, boekhouding, hosting, webapp, open source',
      },
      {
        name: 'description',
        content: 'Startpagina vsoft administratieve software en service 1985',
      },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
