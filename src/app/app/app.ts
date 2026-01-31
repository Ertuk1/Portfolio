import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar';
import { HeroComponent } from '../sections/hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,HeroComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('portfolio');
}
