import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SendEmailService } from '../../services/send-email.service'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Corrected to 'styleUrls'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private sendEmailService: SendEmailService) {}

  onSubmit() {
    this.sendEmailService.sendEmail(this.contactForm)
      .then(() => {
        console.log('Form Submitted and Email Sent');
        // Add additional logic if needed
      });
  }
}
