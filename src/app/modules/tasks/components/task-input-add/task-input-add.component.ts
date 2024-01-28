import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-input-add',
  templateUrl: './task-input-add.component.html',
  styleUrls: ['./task-input-add.component.css']
})
export class TaskInputAddComponent {

  @Output() public emitItemTask = new EventEmitter();

  public Tasks:any;
  public titleTask:String = "";

  constructor(private taskApi:TaskServiceService, private route:ActivatedRoute){}

  async createTask(){

    let task:Task = {

      id: 1,
      title: this.titleTask,
      status: 'Pendente',
      list_id: Number(this.route.snapshot.paramMap.get("id"))

    };

    await this.taskApi.createTask(task).subscribe({next: (response) => {

        this.Tasks =  response.body;
        this.emitItemTask.emit();
        this.titleTask = '';

    }, error: (response) => {

      alert(response.error.message);

    }});

  }

}
