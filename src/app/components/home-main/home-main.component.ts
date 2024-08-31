import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FirstSectionComponent } from '../first-section/first-section.component';
import { SecondSectionComponent } from '../second-section/second-section.component';
import { ThirdSectionComponent } from '../third-section/third-section.component';
import { FooterComponent } from '../footer/footer.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { AboutProductComponent } from '../about-product/about-product.component';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [HeaderComponent, FirstSectionComponent, SecondSectionComponent, ThirdSectionComponent, FooterComponent, ReviewsComponent, AboutProductComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.css'
})
export class HomeMainComponent {

}
