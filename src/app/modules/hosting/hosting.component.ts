import { Component, OnInit } from '@angular/core';

import { SeoService } from './../../shared/services/seo.service';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
})
export class HostingComponent implements OnInit {
  accordeonOneAtATime = true;
  accordeonHostingOpen = true;

  constructor(private seoS: SeoService) {}

  ngOnInit(): void {
    this.seoS.setTitle('Vsoft Hosting');
    this.seoS.replaceTags([
      {
        name: 'keywords',
        content: 'Vsoft, Plesk, Dotnet Core, ASP.NET 5, HTTPS',
      },
      {
        name: 'description',
        content: 'Plesk Dotnet Core hosting',
      },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
