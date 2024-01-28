import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent {

  constructor(private router:Router){}

  redirectForHome(){

    this.router.navigate(['']);

  }

}
