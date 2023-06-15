import { Component } from '@angular/core';
import { Job } from 'src/app/shared/job.interface';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  constructor(){}
  jobs: Job[] = [
    { title: 'Mern Developer', location:'India', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { title: 'Mean Developer', location:'London', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { title: '.Net Developer', location:'Paris', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { title: 'Paython Developer', location:'USA', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { title: 'Data scientist', location:'China', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { title: 'Android Developer', location:'Dubai', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { title: 'Java Developer', location:'Germany', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { title: 'Ai Developer', location:'Canada', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { title: 'Ethical Hacker', location:'Banglore', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { title: 'Fluter Developer', location:'Delhi', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
  ]

  ngOnInit() {}
}
