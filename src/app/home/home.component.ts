import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProject = {} as Project;
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Soundarya S - Home')
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(1)
  }

}
