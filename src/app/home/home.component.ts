import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Projects';

import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {
 public featuredProject = {} as Project;
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Soundarya S - Home')
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(1)
  }

}
