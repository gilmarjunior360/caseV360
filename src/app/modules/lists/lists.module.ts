import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { ListInputAddComponent } from './components/list-input-add/list-input-add.component';
import { ListDeleteAllComponent } from './components/list-delete-all/list-delete-all.component';
import { ListHomeComponent } from './pages/list-home/list-home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    ListInputAddComponent,
    ListDeleteAllComponent,
    ListHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ListsModule { }
