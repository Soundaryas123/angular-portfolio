import { Component, Input } from '@angular/core';
import { Project } from '../_models/Projects';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project = {} as Project
  public bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {

  }


  public openProjectModal() {
    const modalOptions: ModalOptions = {
      // class: 'modal-lg',
      initialState: {
        project: this.project
      }
    }

    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions)
  }

}
