import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './modules/lists/components/header/header.component';
import { ListHomeComponent } from './modules/lists/pages/list-home/list-home.component';
import { TaskHomeComponent } from './modules/tasks/pages/task-home/task-home.component';


const routes: Routes = [
  {path:'', component: ListHomeComponent ,title: 'ToDoList'},
  {path:'list/:id/tasks', component: TaskHomeComponent ,title: 'Lista de Tarefas'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
