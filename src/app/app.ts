
import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { CONTENT } from './data/content';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BackToTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  lang = signal<'uk' | 'en'>('uk');

  get content() {
    return CONTENT[this.lang()];
  }

  get resumeUrl() {
    return this.lang() === 'uk'
      ? '/resume-uk.pdf'
      : '/resume-en.pdf';
  }
}
