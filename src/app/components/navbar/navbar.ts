import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  language: 'en' | 'de' = (localStorage.getItem('language') as 'en' | 'de') ?? 'en';

toggleLanguage() {
  this.language = this.language === 'en' ? 'de' : 'en';
  localStorage.setItem('language', this.language);
}

}
