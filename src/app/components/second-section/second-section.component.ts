import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.css'
})
export class SecondSectionComponent {

}
