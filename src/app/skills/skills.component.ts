import { Component } from '@angular/core';

// Define a type for skill items and their corresponding icons
type SkillIconMap = {
  [key: string]: string;
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // Define skill items and their corresponding icons
  skillIcons: SkillIconMap = {
    'JavaScript': 'fa-js',
    'Java': 'fa-java',
    'C#': 'fa-csharp',
    'HTML': 'fa-html5',
    'CSS': 'fa-css3',
    'MySQL': 'fa-database',
    'SQL Server': 'fa-database',
    'PostgreSQL': 'fa-database',
    'Angular': 'fa-angular',
    '.NET Core': 'fa-dot-net',
    'Spring Boot': 'fa-spring',
    'Visual Studio': 'fa-visual-studio',
    'Android Studio': 'fa-android',
    'Eclipse': 'fa-eclipse',
    'Git': 'fa-git'
  };

  skills = [
    { category: 'Programming Languages', items: ['JavaScript', 'Java', 'C#', 'HTML', 'CSS'] },
    { category: 'Database', items: ['MySQL', 'SQL Server', 'PostgreSQL'] },
    { category: 'Tools and Frameworks', items: ['Angular', '.NET Core', 'Spring Boot', 'Visual Studio', 'Android Studio', 'Eclipse', 'Git'] }
  ];

  getIconClass(item: string): string {
    return this.skillIcons[item] || 'fa-question'; // Fallback icon
  }
}
