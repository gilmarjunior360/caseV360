import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  public TaskList:any;

  constructor(private taskApi:TaskServiceService, private route:ActivatedRoute) {}

  ngOnInit(): void {

    this.taskApi.getAllTasks(Number(this.route.snapshot.paramMap.get("id"))).subscribe({next: (response) => {

      this.TaskList = response.body;

    }});

    //console.log(this.route.snapshot.paramMap.get("id"));
  }

  async updateTask(task:Task){

    await this.taskApi.updateTask(task).subscribe({next: (response) => {

      alert("Task Atualizada com sucesso");
      this.ngOnInit(); //linha repetida, pois se colocar para ambos os casos não estava funcionando

    }, error: (response) => {

      alert(response.error.message);
      this.ngOnInit(); //linha repetida, pois se colocar para ambos os casos não estava funcionando

    }})

  };

  async deleteTask(task:Task){

    if(confirm('Você realmente deseja deletar a Tarefa?')){

      await this.taskApi.deleteTask(task).subscribe({next: (response) => {this.ngOnInit();}});

    }

  };

  async deleteAllTasks(){

    if(this.TaskList.length){

      if(confirm('Você realmente deseja deletar todas as Tarefas?')){

        await this.taskApi.deleteAllTasks(Number(this.route.snapshot.paramMap.get("id"))).subscribe({next: (response) => {this.ngOnInit();}});
  
      }

    }
    

  }

}
