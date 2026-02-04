import { NgStyle } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef , ChangeDetectorRef} from '@angular/core';


@Component({
  selector: 'app-hero',
  imports: [NgStyle],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}
scrollToAnchor() {
  document.getElementById('anchor3')?.scrollIntoView({
    behavior: 'smooth'
  });
}
@ViewChild('content', { static: false }) content!: ElementRef;
trackWidth=0;
ngAfterViewInit() {
  const width = this.content.nativeElement.scrollWidth;
  this.trackWidth = width; // NICHT *2
  this.cdr.detectChanges();
}

get animationDistance() {
  return '-50%';
}




get animationDuration() {
  return this.trackWidth / 100; 
}




}
