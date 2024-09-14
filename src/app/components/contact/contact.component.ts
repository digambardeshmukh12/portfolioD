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

  
 
  constructor(private _snackBar: MatSnackBar) {}




  openSnackBar(message: string,  responseType: 'S' | 'E') {
    const panelClass = responseType === 'S' ? 'snackbar-success' : 'snackbar-error';
    this._snackBar.open(message, 'Close', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000,  
      panelClass: [panelClass]  
    });
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