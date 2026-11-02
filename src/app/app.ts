
import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { CONTENT } from './data/content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
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
