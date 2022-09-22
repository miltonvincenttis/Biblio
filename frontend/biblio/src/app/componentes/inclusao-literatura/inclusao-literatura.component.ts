import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Literatura } from 'src/app/models/literatura.model';
import { LiteraturasService } from 'src/app/services/literaturas.service';

@Component({
  selector: 'app-inclusao-literatura',
  templateUrl: './inclusao-literatura.component.html',
  styleUrls: ['./inclusao-literatura.component.css']
})
export class InclusaoLiteraturaComponent implements OnInit {

  inclusaoLiteraturaRequest: Literatura = {
    id: '00000000-0000-0000-0000-000000000000',   //--- se for vazio, o que é o caso de inclusão, haverá erro de validação no backend
    nome: '',
    disponivel: 0
  };

  constructor(private literaturasService: LiteraturasService, private router: Router) {}

  ngOnInit(): void {
  }

  incluirLiteratura() {
    console.log(this.inclusaoLiteraturaRequest);

    this.literaturasService.incluirLiteratura(this.inclusaoLiteraturaRequest).subscribe({
      next: (literatura)=>{
        console.log(literatura);
        this.router.navigate(['literaturas-list']);
      },
      error: (error)=>{
        console.log(error);
      }

    });
    
  }
}
