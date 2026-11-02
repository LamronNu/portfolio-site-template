
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  @Input() lang: 'uk' | 'en' = 'uk';

  @Input() nav: any;

  @Output() langChange = new EventEmitter<'uk' | 'en'>();
}
