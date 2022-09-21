import { Component, OnInit } from '@angular/core';
import { Literatura } from 'src/app/models/literatura.model';
import { LiteraturasService } from 'src/app/services/literaturas.service';

@Component({
  selector: 'app-inclusao-literatura',
  templateUrl: './inclusao-literatura.component.html',
  styleUrls: ['./inclusao-literatura.component.css']
})
export class InclusaoLiteraturaComponent implements OnInit {

  inclusaoLiteraturaRequest: Literatura = {
    id: '',
    nome: '',
    disponivel: 0
  };

  constructor(private literaturasService: LiteraturasService) {

  }

  ngOnInit(): void {
  }

  incluirLiteratura() {
    console.log(this.inclusaoLiteraturaRequest);
    this.literaturasService.incluirLiteratura(this.inclusaoLiteraturaRequest).subscribe({
      next: (literatura)=>{
        console.log(literatura);
      },
      error: (error)=>{
        console.log(error);
      }

    });
    
  }
}
