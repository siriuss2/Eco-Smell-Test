import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, CommonModule, FormsModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent implements OnInit {
  products = [
    {
      image: '../../../assets/images/SelfLoveKolekcija/slika1.jpg',
      badge: 'Fall Scent! Limited Edition',
      name: 'Plug Hub™ Starter Kit',
      reviews: 15,
      price: 200,
      quantity: 1,
      category: ['Self Love Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/VeligdenskaKolekcija/slika1.jpg',
      badge: 'Fall Scent! Limited Edition',
      name: 'Scent Stix + Stand™ Starter Kit',
      reviews: 10,
      price: 200,
      quantity: 1,
      category: ['Велигденска Колекција'], // Added categories
      scent: 'Rose'
    },
    {
      image: '../../../assets/images/PandaCollection/slika1.jpg',
      badge: 'New Look!',
      name: 'Scent Spritz™ Starter Kit',
      reviews: 20,
      price: 200,
      quantity: 1,
      category: ['Панда Колекција'], // Added categories
      scent: 'Citrus'
    },
    {
      image: '../../../assets/images/FollowYourHeartKolekcija/slika1.jpg',
      badge: 'Limited Edition',
      name: 'Relaxing Scent™ Kit',
      reviews: 40,
      price: 200,
      quantity: 1,
      category: ['Follow Your Heart Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/FollowYourHeartKolekcija/slika4.jpg',
      badge: 'New Arrival',
      name: 'Sweet Dreams™ Kit',
      reviews: 30,
      price: 200,
      quantity: 1,
      category: ['Self Love Колекција'], // Added categories
      scent: 'Rose'
    },
    {
      image: '../../../assets/images/LetnaKolekcija/slika1.jpg',
      badge: 'Best Seller',
      name: 'Energy Boost™ Kit',
      reviews: 25,
      price: 200,
      quantity: 1,
      category: ['Летна Колекција'], // Added categories
      scent: 'Citrus'
    },
    {
      image: '../../../assets/images/LetnaKolekcija/slika2.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 27,
      price: 200,
      quantity: 1,
      category: ['Летна Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/LetnaKolekcija/slika3.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 16,
      price: 200,
      quantity: 1,
      category: ['Летна Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/LetnaKolekcija/slika4.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 18,
      price: 200,
      quantity: 1,
      category: ['Летна Колекција'], // Added categories
      scent: 'Lavender'
    },{
      image: '../../../assets/images/LetnaKolekcija/slika5.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 23,
      price: 200,
      quantity: 1,
      category: ['Летна Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/LetnaKolekcija/slika6.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 21,
      price: 200,
      quantity: 1,
      category: ['Летна Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/LetnaKolekcija/slika7.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 5,
      price: 200,
      quantity: 1,
      category: ['Летна Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/LetnaKolekcija/slika8.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 7,
      price: 200,
      quantity: 1,
      category: ['Летна Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/ProletnaKolekcija/slika2.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 26,
      price: 200,
      quantity: 1,
      category: ['Пролетна Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/ProletnaKolekcija/slika3.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 11,
      price: 200,
      quantity: 1,
      category: ['Пролетна Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/ProletnaKolekcija/slika4.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 13,
      price: 200,
      quantity: 1,
      category: ['Пролетна Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/ProletnaKolekcija/slika5.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 34,
      price: 200,
      quantity: 1,
      category: ['Пролетна Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/ProletnaKolekcija/slika6.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 26,
      price: 200,
      quantity: 1,
      category: ['Пролетна Колекција'], // Added categories
      scent: 'Lavender'
    },
    {
      image: '../../../assets/images/ProletnaKolekcija/slika7.jpg',
      badge: 'New Scent!',
      name: 'Happy Moments™ Kit',
      reviews: 20,
      price: 200,
      quantity: 1,
      category: ['Пролетна Колекција'], // Added categories
      scent: 'Lavender'
    },
  ];

  filteredProducts: any[] = [];
  selectedCategories: string[] = [];
  selectedScent: string | null = null;
  selectedSortOption: string = 'best-selling';

  // Pagination variables
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalPages: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.applyFilters();
  }

  // Method to update filters and apply them
  toggleCategory(category: string): void {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(c => c !== category);
    } else {
      this.selectedCategories.push(category);
    }
    this.applyFilters();
  }

  selectScent(scent: string): void {
    this.selectedScent = scent;
    this.applyFilters();
  }

  selectSortOption(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedSortOption = selectElement.value;
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = this.products.filter(product => {
      const matchesCategory = this.selectedCategories.length === 0 || product.category.some(cat => this.selectedCategories.includes(cat));
      const matchesScent = !this.selectedScent || product.scent === this.selectedScent;
      return matchesCategory && matchesScent;
    });
  
    // Apply sorting
    filtered.sort((a, b) => {
      if (this.selectedSortOption === 'lowest-to-highest') {
        return a.price - b.price;
      } else if (this.selectedSortOption === 'highest-to-lowest') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  
    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    this.filteredProducts = this.paginate(filtered);
  }

  paginate(products: any[]): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return products.slice(start, end);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.applyFilters(); // Re-apply filters to update the page
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    console.log('Cart items in CollectionsComponent:', this.cartService.getCartItems());
  }

  // Navigate to filtered collections
  navigateToFilteredCollection(category: string): void {

    console.log("navigated category:" + category)
    this.selectedCategories = [category]; // Set the selected category
    this.applyFilters(); // Apply filters
    this.router.navigate(['/collections']); // Navigate to the collections page
  }
}
