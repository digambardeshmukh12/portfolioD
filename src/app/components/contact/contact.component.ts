import { trigger, transition, style, animate } from '@angular/animations';
import { Component, inject } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }), // Slide in from left
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('slideOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }), // Slide in from right
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in', style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  currentForm: 'contact' | 'hire' = 'contact';
  formData = {
    name: '',
    email: '',
    message: '',
    projectName: '',
    budget: '',
    details: '',
    hireEmail: ''
  };

  toggleForm(form: 'contact' | 'hire') {
    this.currentForm = form;
  }

  

  sendQuote() {
    console.log('Quote requested with data:', this.formData);
  }

  sendEmail() {
    
      const serviceID = 'service_xbd7vmg'; // Replace with your EmailJS service ID
      const templateID = 'template_y2wdo1p'; // Replace with your EmailJS template ID
      const userID = 'DymUODE7IAA0gvXDW'; // Replace with your EmailJS user ID

      const templateParams = {
        name: this.formData.name,
        email: 'digambardeshmukhoffice@gmail.com',
         message: this.formData.message + " " +  this.formData.email
      };

      emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response: EmailJSResponseStatus) => {
           this.openSnackBar('Email sent successfully!' , 'S');
           this.formData = {
            name: '',
            email: '',
            message: ''
          };
         }, (error) => {
          this.openSnackBar('Failed to send email!' , 'E')
          });
    }
  
}
