import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  blog: any;

  blogs = [
    {
      id: 1,
      title: 'Четврто место на Националниот натпревар за најдобри ученички компании Џуниор Ачивмент',
      image1: '../../../assets/images/JuniorAchievement/slika5.jpg',
      image2: '../../../assets/images/JuniorAchievement/slika1.jpg',
      image3: '../../../assets/images/JuniorAchievement/slika4.jpg',
      paragraph1: `Ученичката компанија Eco-Smell од нашето училиште освои четврто место на Националниот натпревар за најдобри ученички компании Junior Achievement од вкупно 25 ученички компании од Македонија. Компанијата ја формираа учениците Георгина Алексовска, Филип Величковски, Маријан Багевски, Дори Иванова и Дијана Бошковска и беа менторирани од професорката Ангела Магдеска. Натпреварот се одржа во Струга од 24.04.2024 до 26.04.2024. `,
      paragraph2: ``,
      paragraph3: ``
    },
    {
      id: 2,
      title: 'Eco - Smell победи на натпреварот UPSHIFT Air',
      image1: '../../../assets/images/Upshift/slika5.jpg',
      image2: '../../../assets/images/Upshift/slika1.jpg',
      image3: '../../../assets/images/Upshift/slika2.jpg',
      paragraph1: `Тимот Eco-Smell победи на натпреварот UPSHIFT Air и освои награда од 120 000 денари за реализација на проектот и производство на еко-биоразградливите освежувачи за автомобили, кои откако ќе го исцрпат своето дејство, може да се засадат во земја. `,
      paragraph2: `На натпреварот учествуваа учениците Георгина Алексовска, Андреј Тодоровски, Дори Иванова, Дијана Бошковска и Маријан Багевски и беа менторирани од професорката Ангела Магдеска. Натпреварот се одржа во Струга од 04.04.2024 до 06.04.2024 и беше организиран од здружението ЛЕАД.`,
      paragraph3: `За производство на освежувачите е искористена старата хартија која не се употребува во училиштето. Истата е рециклирана од страна на учениците и во неа се додадени семиња од цвеќиња и есенцијални масла за мирис. Откако е засаден, освежувачот се разградува и семките почнуваат да никнуваат и растат во цвеќиња. Освежувачот помага во намалување на отпадот и овозможува создавање на нов живот од нешто што инаку би било складирано во депонија. Овој производ овозможува секојдневните возачи да придонесат кон почиста средина преку користење еколошко позитивни одржливи рециклирани освежувачи.`
    }
    
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    
    // Convert blogId to a number and handle the possibility of it being null
    const id = blogId ? +blogId : 0;
  
    // Find the blog with the given id
    this.blog = this.blogs.find(b => b.id === id);
  }
  
}
