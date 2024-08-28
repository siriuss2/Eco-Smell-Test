import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Alice Johnson',
      role: 'Project Manager',
      image: '../../../assets/images/team/alice.jpg'
    },
    {
      name: 'Bob Smith',
      role: 'Lead Developer',
      image: '../../../assets/images/team/bob.jpg'
    },
    {
      name: 'Charlie Brown',
      role: 'UI/UX Designer',
      image: '../../../assets/images/team/charlie.jpg'
    },
    {
      name: 'Diana Prince',
      role: 'Frontend Developer',
      image: '../../../assets/images/team/diana.jpg'
    },
    {
      name: 'Ethan Hunt',
      role: 'Backend Developer',
      image: '../../../assets/images/team/ethan.jpg'
    }
  ];
}