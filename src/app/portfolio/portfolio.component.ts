import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
 public projects: Project[] = [];
 public isCollapsed: boolean = true;
public  filtering: boolean = false;

 public filters: { [key: string]: boolean } = {
    typescript: false,
    angular: false,
    css: false,
    javascript: false,
    reactjs: false,
    tailwind: false,
    scss: false,
    angularmaterial: false,
    bootstrap: false,
    html: false
  };

 public languages = [
    { name: 'typescript', label: 'TypeScript' },
    { name: 'javascript', label: 'Javascript' },
    { name: 'html', label: 'HTML' },
    { name: 'css', label: 'CSS' }
  ];

public  frameworks = [
    { name: 'angular', label: 'Angular' },
    { name: 'reactjs', label: 'Reactjs' },
    { name: 'tailwind', label: 'Tailwind' },
    { name: 'scss', label: 'SCSS' },
    { name: 'angularmaterial', label: 'Angular Material' },
    { name: 'bootstrap', label: 'Bootstrap' }
  ];

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Soundarya S - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

 public filter() {
    const filterTags: Tag[] = [];

    Object.keys(this.filters).forEach(key => {
      if (this.filters[key]) {
        filterTags.push(Tag[key.toUpperCase() as keyof typeof Tag]);
      }
    });

    this.filtering = filterTags.length > 0;
    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

 public resetFilters() {
    Object.keys(this.filters).forEach(key => this.filters[key] = false);
    this.filtering = false;
    this.projects = this.projectService.getProjects();
  }
}
