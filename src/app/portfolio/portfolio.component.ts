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

  projects = {} as Project[]

  isCollapsed: boolean = true;
  filtering: boolean = false;


  typescript: boolean = false;
  angular: boolean = false;
  css: boolean = false;
  javascript: boolean = false;
  reactjs: boolean = false;
  tailwind: boolean = false;
  scss: boolean = false;
  angularmaterial: boolean = false;
  bootstrap: boolean = false;
  html: boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Soundarya S - portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects()
  }

  filter() {
    let filterTags: Tag[] = [];
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.css) {
      filterTags.push(Tag.CSS3);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.reactjs) {
      filterTags.push(Tag.REACTJS);
    }
    if (this.tailwind) {
      filterTags.push(Tag.TAILWIND);
    }
    if (this.scss) {
      filterTags.push(Tag.SCSS);
    }
    if (this.angularmaterial) {
      filterTags.push(Tag.ANGULARMATERIAL);
    }
    if (this.bootstrap) {
      filterTags.push(Tag.BOOTSTRAP);
    }
    if (this.html) {
      filterTags.push(Tag.HTML5);
    }

    if (this.typescript||this.angular||this.css||this.javascript||this.reactjs||this.tailwind||this.scss||this.angularmaterial||this.bootstrap||this.html){
      this.filtering=true;
    }else{
      this.filtering=false
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags)
  }

  resetFilters() {
    this.typescript = false
    this.angular = false
    this.css = false
    this.javascript = false
    this.reactjs = false
    this.tailwind = false
    this.scss = false
    this.angularmaterial = false
    this.bootstrap = false
    this.html = false
this.filtering=false

    this.projects = this.projectService.getProjects()
  }


}
