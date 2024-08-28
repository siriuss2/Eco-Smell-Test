import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  private serviceId = 'service_sqzthg2';  // Replace with your EmailJS service ID
  private templateId = 'template_4r2q3ya';  // Replace with your EmailJS template ID
  private publicKey = 'SFcimWfSt5kqtMLP5';  // Replace with your EmailJS public key

  constructor() {
    emailjs.init(this.publicKey);
  }

  sendEmail(contactForm: any) {
    const templateParams = {
      to_name: 'Recipient Name', // Replace with actual recipient name or use a dynamic value
      from_name: contactForm.name,
      subject: contactForm.subject,
      message: contactForm.message,
    };

    return emailjs.send(this.serviceId, this.templateId, templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  }
}
