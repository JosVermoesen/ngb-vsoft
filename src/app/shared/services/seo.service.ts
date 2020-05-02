import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private metaS: Meta, private titleS: Title) {}

  setTitle(moduleTitle: string) {
    this.titleS.setTitle(moduleTitle);
  }

  removeTags() {
    this.metaS.removeTag('name="description"');
    this.metaS.removeTag('name="keywords"');
    this.metaS.removeTag('name="robots"');
  }

  replaceTags(seoObject: any[]) {
    this.removeTags();
    this.metaS.addTags(seoObject);
  }
}
