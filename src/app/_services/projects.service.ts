import { Injectable } from '@angular/core';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [{
    id: 0,
    name: 'Angular',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsum?',
    description: '',
    projectLink: 'https://github.com/Soundaryas123/react_watchit',
    tags: [Tag.ANGULAR, Tag.JAVASCRIPT],
    pictures: ["../../assets/image.png", "../../assets/image.png", "../../assets/image.png"]
  }, {
    id: 1,
    name: 'Javascript',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsum?',
    description: '',
    projectLink: 'https://github.com/Soundaryas123',
    tags: [Tag.HTML5, Tag.JAVASCRIPT],
    pictures: ["../../assets/image.png", "../../assets/image.png", "../../assets/image.png"]
  }, {
    id: 2,
    name: 'css',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsum?',
    description: '',
    projectLink: 'https://github.com/Soundaryas123',
    tags: [Tag.ANGULAR, Tag.CSS3],
    pictures: ["../../assets/image.png", "../../assets/image.png", "../../assets/image.png"]
  }, {
    id: 3,
    name: 'ts',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsum?',
    description: '',
    projectLink: 'https://github.com/Soundaryas123',
    tags: [Tag.TYPESCRIPT],
    pictures: ["../../assets/image.png", "../../assets/image.png", "../../assets/image.png"]
  }, {
    id: 4,
    name: 'React',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsum?',
    description: '',
    projectLink: 'https://github.com/Soundaryas123',
    tags: [Tag.REACTJS],
    pictures: ["../../assets/image.png", "../../assets/image.png", "../../assets/image.png"]
  }, {
    id: 5,
    name: 'Tailwind',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsum?',
    description: '',
    projectLink: 'https://github.com/Soundaryas123',
    tags: [Tag.TAILWIND],
    pictures: ["../../assets/image.png", "../../assets/image.png", "../../assets/image.png"]
  },]
  constructor() { }


  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id)
    if (project === undefined) {
      throw new TypeError(`There is no project that matches the id: ${id}`)
    }
    return project
  }
  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];
    this.projects.forEach((project) => {
      let foundAll = true;
      filterTags.forEach((filterTag) => {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      })
      if (foundAll) {
        filteredProjects.push(project)
      }
    })
    return filteredProjects
  }
}
