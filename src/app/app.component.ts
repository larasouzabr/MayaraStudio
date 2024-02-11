import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesOfferedComponent } from "./components/services-offered/services-offered.component";
import { LashesSectionComponent } from "./components/lashes-section/lashes-section.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, NgbModule, ServicesOfferedComponent, LashesSectionComponent]
})
export class AppComponent {
  title = 'Mayara-studio';
}
