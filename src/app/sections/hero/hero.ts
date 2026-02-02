import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
scrollToAnchor() {
  document.getElementById('anchor3')?.scrollIntoView({
    behavior: 'smooth'
  });
}

}
