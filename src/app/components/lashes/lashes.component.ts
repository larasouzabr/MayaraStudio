import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';


interface LashItem {
  name: string;
  price: string;
  description: string;
  img: string[];
  manutencoes?: string[];
}

@Component({
  selector: 'app-lashes',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './lashes.component.html',
  styleUrl: './lashes.component.css'
})
export class LashesComponent {
  slideConfig = {
    "autoplay": true,
    "arrows": false,
    "slidesToScroll": 1,
    "slidesToShow": 1,
    infinite: true
  };

  @Input() lash: LashItem = {
    name: 'string',
    price: 'string',
    description: 'string',
    img: [
      ''
    ],
    manutencoes: ['']
  };

}
