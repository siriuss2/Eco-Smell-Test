import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  blogs = [
    {
      id: 1,
      title: 'Национален натпревар за најдобри ученички компании Junior Achievement',
      image: '../../../assets/images/JuniorAchievement/slika5.jpg',
      description: 'Четврто место на Националниот натпревар за најдобри ученички компании Junior Achievement.'
    },
    {
      id: 2,
      title: 'Eco - Smell победи на натпреварот UPSHIFT Air',
      image: '../../../assets/images/Upshift/slika5.jpg',
      description: 'Тимот Eco-Smell победи на натпреварот UPSHIFT Air и освои награда од 120 000 денари за реализација на проектот и производство на еко-биоразградливите освежувачи за автомобили, кои откако ќе го исцрпат своето дејство, може да се засадат во земја.'
    }
  ];

  constructor(private router: Router) {}

  viewBlogDetails(blogId: number) {
    this.router.navigate(['/blog', blogId]);
  }

}
