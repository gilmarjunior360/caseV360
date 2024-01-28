import { Component, EventEmitter, Output } from '@angular/core';
import { ListServiceService } from 'src/app/services/list-service.service';
import { List } from '../../models/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-input-add',
  templateUrl: './list-input-add.component.html',
  styleUrls: ['./list-input-add.component.css']
})
export class ListInputAddComponent{

  @Output() public emitItemList = new EventEmitter();

  public Lists:any;
  public titleList:String = "";

  constructor(private listAPI: ListServiceService) {}

  async createList(){

    let list:List = {

      id: 1,
      title: this.titleList

    };

    await this.listAPI.createList(list).subscribe({next: (response) => {

        this.Lists =  response.body;
        this.emitItemList.emit();
        this.titleList = '';

    }, error: (response) => {

      alert(response.error.message);

    }})

  }

}
