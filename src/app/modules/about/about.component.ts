import { Component, OnInit } from '@angular/core';

import { SeoService } from './../../shared/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  constructor(private seoS: SeoService) {}

  ngOnInit(): void {
    this.seoS.setTitle('Over Vsoft');
    this.seoS.replaceTags([
      {
        name: 'keywords',
        content: 'Jos, Vermoesen, Vsoft, github',
      },
      {
        name: 'description',
        content: 'Angular landing page with bootstrap',
      },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
