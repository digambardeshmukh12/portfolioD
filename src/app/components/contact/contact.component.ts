import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`
      Name: ${this.formData.name}
      Email: ${this.formData.email}
      Message: ${this.formData.message}
    `);

    const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Optionally, reset the form
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}