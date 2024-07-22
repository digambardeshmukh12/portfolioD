import { trigger, transition, style, animate } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  @ViewChild('projectsList') projectsList!: ElementRef;
  pr1 = 'Visitor Management System typically refers to a structure to keep track of visitors’ activities in organizations and public buildings. It can provide necessary output and information to the user and record the incoming and outcoming visitors within the shortest time. My project was a college submission, so I had to carry out all the responsibilities of front-end using angular.';
  pr2 = 'Social Media Website is a dynamic and interactive platform designed to connect users and facilitate seamless communication and content sharing. Built using the powerful Angular framework and Firebase backend, this project offers a feature-rich and scalable solution for creating a vibrant social media experience. For this Social Media Website project.I took on the entire responsibility of the project. From conceptualization to implementation, testing ,and deployment, I handled every aspect of the development process. Technologies: HTML, CSS, Angular, Firebase.'
  pr3 = 'At AssetCues Solutions Pvt Ltd, I specialized in developing a user-friendly interface for an Asset Management System using Angular and Angular Material UI. My role extended beyond frontend development to also include the creation and integration of APIs with .NET Core. This comprehensive approach enhanced system functionality and optimized asset tracking processes, ensuring seamless communication between the frontend and backend.'
  projects = [
    {
      title: 'Visitor Management System',
      subtitle: 'Full Stack Development',
      description: [this.pr1],
      image: 'assets/visitor-management-system.jpg'
    },
    {
      title: 'Social Media Website',
      subtitle: 'Frontend Development',
      description: [this.pr2],
      image: 'assets/social-media-website.jpg'
    },
    {
      title: 'Assettrack Solution',
      subtitle: 'Full Stack Development',
      description: [this.pr3 ],
      image: 'assets/asset-management-system.jpg'
    }
  ];

  ensureDescriptionIsArray(description: string | string[]): string[] {
    return Array.isArray(description) ? description : [description];
  }


  
}