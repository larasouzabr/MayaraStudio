import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lashes-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lashes-section.component.html',
  styleUrl: './lashes-section.component.css'
})
export class LashesSectionComponent {
  lashes = [{
    name: 'Volume Brown Luxo',
    price: '220',
    description: 'Técnica perfeita para quem gosta de volume e delicadeza, ideal para ruivas e loiras.',
    img: '',
    manutencoes: [
      '25 dias - R$ 140,00',
      '30 dias - R$150,00'
    ],

  }]


  sendMessageOnWhatsapp = "https://api.whatsapp.com/send?phone=+559982284345&text=Olá"

  values(obj: any) {
    return Object.values(obj);
  }
}
