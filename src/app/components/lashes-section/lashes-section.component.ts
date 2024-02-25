import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LashesComponent } from "../lashes/lashes.component";

@Component({
  selector: 'app-lashes-section',
  standalone: true,
  templateUrl: './lashes-section.component.html',
  styleUrl: './lashes-section.component.css',
  imports: [CommonModule, SlickCarouselModule, LashesComponent]
})
export class LashesSectionComponent {
  lashes = [
    {
      name: 'Volume Brasileiro',
      price: '150',
      description: 'Técnica indicada para quem gosta de sutilidade e a manutenção é feita a cada 15 dias.',
      img: [
        '../../../assets/lashes-types/volume-brasileiro.PNG',
        '../../../assets/lashes-types/volume-brasileiro-brown.PNG', '../../../assets/lashes-types/volume-brasileiro.PNG',
        '../../../assets/lashes-types/volume-brasileiro.PNG',

      ],
      manutencoes: [
        '15 dias - R$ 90,00',
        '20 dias - R$100,00'
      ],
    },
    {
      name: 'Volume Brasileiro Brown ',
      price: '150',
      description: 'Para quem deseja um efeito mais natural, ideal para ruivas e loiras.',
      img: ['../../../assets/lashes-types/volume-brasileiro-brown.PNG'],
      manutencoes: [
        '15 dias - R$ 90,00',
        '20 dias - R$100,00'
      ],
    },
    {
      name: 'Volume Egípcio',
      price: '170',
      description: 'Técnica feita com fios tecnológicos 3D, proporciona um volume moderado.',
      img: ['../../../assets/lashes-types/volume-egipcio.PNG'],
      manutencoes: [
        '15 dias - R$ 100,00',
        '20 dias - R$110,00'
      ],
    },
    {
      name: 'Efeito Fox',
      price: '180',
      description: 'Técnica perfeita para quem gosta de diferenciar preferida por quem não gosta de cílios muito curvados.',
      img: ['../../../assets/lashes-types/efeito-fox.PNG'],
    },
    {
      name: 'Volume Luxo Brown',
      price: '220',
      description: 'Técnica perfeita para quem gosta de volume e delicadeza, ideal para ruivas e loiras.',
      img: ['../../../assets/lashes-types/volume-luxo-brown.PNG'],
      manutencoes: [
        '25 dias - R$ 140,00',
        '30 dias - R$150,00'
      ],
    },
    {
      name: 'Volume Moderado',
      price: '220',
      description: 'Técnica perfeita para quem gosta de delicadeza e durabilidade.',
      img: ['../../../assets/lashes-types/volume-moderado.PNG'],
      manutencoes: [
        '25 dias - R$ 140,00',
        '30 dias - R$150,00'
      ],
    },
    {
      name: 'Volume Luxo',
      price: '220',
      description: 'Técnica perfeita para quem gosta de delicadeza e durabilidade.',
      img: ['../../../assets/lashes-types/volume-luxo.PNG'],
      manutencoes: [
        '25 dias - R$ 140,00',
        '30 dias - R$150,00'
      ],
    },
  ]

  firstoptionshowing = false
  slideConfigOptions = {
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          "slidesToShow": 2,
          "slidesToScroll": 1,
          "autoplay": true,
          "autoplaySpeed": 4000,
          "infinite": true,
          arrows: false
        }
      }
    ]
  };
  sendMessageOnWhatsapp = "https://api.whatsapp.com/send?phone=+559982284345&text=Olá"
}
