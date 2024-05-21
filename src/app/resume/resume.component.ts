import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {


  constructor(private titleService: Title, private rendered: Renderer2) {
    this.titleService.setTitle('Soundarya S - resume')
  }

  public sections = [
    {
      heading: 'Professional Experience',
      content: [
        { heading: 'Company', definition: 'Harman Connected Services Corporation India Pvt Ltd' },
        { heading: 'Role', definition: 'Frontend Developer' },
        { heading: 'Duration', definition: '2 years' },
        {
          heading: 'Responsibilities', definition: [
            'Developed and maintained web applications using Angular.\n',
            'Collaborated with backend developers to integrate RESTful APIs.',
            'Ensured cross-browser compatibility and responsive design.',
            'Participated in code reviews and contributed to improving coding standards.'
          ]
        }

      ],
      isOpen: false
    },
    {
      heading: 'Skills and Technologies',
      content: [
        { heading: 'Frameworks and Libraries', definition: 'Angular 12+, Bootstrap, Angular Material, Tailwind, RxJS' },
        { heading: 'Markup and Styling', definition: 'HTML5, CSS3, SCSS' },
        { heading: 'Programming Languages and Scripting', definition: 'JavaScript, TypeScript, JSON' },
        { heading: 'UI/UX Design', definition: 'Figma' },
        { heading: 'Version Control and Collaboration', definition: 'Git, GitHub' },
        { heading: 'Development Tools', definition: 'Visual Studio Code, Chrome DevTools, ESLint, Prettier' },
        { heading: 'Package Managers', definition: 'npm' },
        { heading: 'Build Tools and Performance Optimization', definition: 'Webpack, Lazy Loading, Code Splitting' },
        { heading: 'Deployment and CI/CD', definition: 'Netlify, Vercel' },
        { heading: 'Testing', definition: 'Jasmine, Karma, Mocha' },
        { heading: 'Concepts and Methodologies', definition: 'Agile, Single Page Applications (SPA), Responsive Web Design (RWD), RESTful API' }
      ],
      isOpen: false
    },
    {
      heading: 'Education',
      content: [
        { heading: 'Institution', definition: 'Dr. Ambedkar Institute of Technology' },
        { heading: 'Year of Graduation', definition: '2022' },
        { heading: 'Stream', definition: 'ECE' },
        { heading: 'CGPA', definition: '8.59' }
      ],
      isOpen: false
    }
  ];


  public toggleSection(section: any) {
    section.isOpen = !section.isOpen;
  }


  public downloadFile() {
    const link = this.rendered.createElement('a');
    link.setAttribute('target', '_blank')
    link.setAttribute('href', '../../assets/Resume.pdf')
    link.setAttribute('download', 'Resume.pdf')
    link.click()
    link.remove();
  }

}
