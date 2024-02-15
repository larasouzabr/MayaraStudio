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
  lashes = [
    {
      name: 'Volume Brasileiro',
      price: '150',
      description: 'Técnica indicada para quem gosta de sutilidade e a manutenção é feita a cada 15 dias.',
      img: '../../../assets/lashes-types/volume-brasileiro.PNG',
      manutencoes: [
        '15 dias - R$ 90,00',
        '20 dias - R$100,00'
      ],
    },
    {
      name: 'Volume Brasileiro Brown ',
      price: '150',
      description: 'Para quem deseja um efeito mais natural, ideal para ruivas e loiras.',
      img: '../../../assets/lashes-types/volume-brasileiro-brown.PNG',
      manutencoes: [
        '15 dias - R$ 90,00',
        '20 dias - R$100,00'
      ],
    },
    {
      name: 'Volume Egípcio',
      price: '170',
      description: 'Técnica feita com fios tecnológicos 3D, proporciona um volume moderado.',
      img: '../../../assets/lashes-types/volume-egipcio.PNG',
      manutencoes: [
        '15 dias - R$ 100,00',
        '20 dias - R$110,00'
      ],
    },
    {
      name: 'Efeito Fox',
      price: '180',
      description: 'Técnica perfeita para quem gosta de diferenciar, podendo trazer um efeito delineado. Fios com curvatura diferenciada, sendo a preferência de quem não gosta de cílios tão curvados.',
      img: '../../../assets/lashes-types/efeito-fox.PNG',
    },
    {
      name: 'Volume Luxo Brown',
      price: '220',
      description: 'Técnica perfeita para quem gosta de volume e delicadeza, ideal para ruivas e loiras.',
      img: '../../../assets/lashes-types/volume-luxo-brown.PNG',
      manutencoes: [
        '25 dias - R$ 140,00',
        '30 dias - R$150,00'
      ],
    },
    {
      name: 'Volume Moderado',
      price: '220',
      description: 'Técnica perfeita para quem gosta de delicadeza e durabilidade.',
      img: '../../../assets/lashes-types/volume-moderado.PNG',
      manutencoes: [
        '25 dias - R$ 140,00',
        '30 dias - R$150,00'
      ],
    },
    {
      name: 'Volume Luxo',
      price: '220',
      description: 'Técnica perfeita para quem gosta de delicadeza e durabilidade.',
      img: '../../../assets/lashes-types/volume-luxo.PNG',
      manutencoes: [
        '25 dias - R$ 140,00',
        '30 dias - R$150,00'
      ],
    },
  ]

  sendMessageOnWhatsapp = "https://api.whatsapp.com/send?phone=+559982284345&text=Olá"

}
