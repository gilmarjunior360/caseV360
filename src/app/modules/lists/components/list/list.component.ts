import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListServiceService } from 'src/app/services/list-service.service';
import { List } from '../../models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements  OnInit {

  public Lists:any;
  public titleList:String = "";

  constructor(private listAPI: ListServiceService, private router:Router) {}

  ngOnInit(): void {

    this.listAPI.getAllLists().subscribe(response => {

       this.Lists =  response.body;

    });
    
  }

  async updateList(list:List){

    await this.listAPI.updateList(list).subscribe({next: (response) => {  

      alert("Lista Atualizada com sucesso");
      this.ngOnInit(); //linha repetida pois se colocar para ambos os casos não estava funcionando

    }, error: (response) => {
      alert(response.error.message);
      this.ngOnInit(); //linha repetida pois se colocar para ambos os casos não estava funcionando
    }});


  }

  async deleteList(list:List){

    if(confirm('Você realmente deseja deletar a Lista?')){

      await this.listAPI.deleteList(list).subscribe({next: (response) => { this.ngOnInit() }});

    }

  }

  redirectForList(id:Number){

    this.router.navigate([`list/${id}/tasks`]);

  }

  async deleteAllLists(){

    console.log(this.Lists)

    if(this.Lists.length){

      if(confirm('Você realmente deseja deletar todas as Listas?')){

        await this.listAPI.deleteAllLists().subscribe({next: (response) => {this.ngOnInit();}});
  
      }

    }
    

  }


}
