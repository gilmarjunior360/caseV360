import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskInputAddComponent } from './components/task-input-add/task-input-add.component';
import { TaskDeleteAllComponent } from './components/task-delete-all/task-delete-all.component';
import { TaskHomeComponent } from './pages/task-home/task-home.component';
import { TaskHeaderComponent } from './components/task-header/task-header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskInputAddComponent,
    TaskDeleteAllComponent,
    TaskHomeComponent,
    TaskHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TasksModule { }
