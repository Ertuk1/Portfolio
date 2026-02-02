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

  onMouseMove(event: MouseEvent) {
  const x = event.clientX;
  const y = event.clientY

  document.body.style.setProperty('--x', `${event.clientX}px`);
  document.body.style.setProperty('--y', `${event.clientY}px`);
  
}

}
