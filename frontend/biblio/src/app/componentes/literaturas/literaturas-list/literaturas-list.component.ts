import { Component, OnInit } from '@angular/core';
import { Literatura } from 'src/app/models/literatura.model';
import { LiteraturasService } from 'src/app/services/literaturas.service';

@Component({
  selector: 'app-literaturas-list',
  templateUrl: './literaturas-list.component.html',
  styleUrls: ['./literaturas-list.component.css']
})
export class LiteraturasListComponent implements OnInit {
  literaturas: Literatura[] = [];
  /*
    {
      id: '33098339-95d8-4ed2-95a6-04449ff7382f',
      nome: 'Um Livro para Todas as Pessoas (1997)',
      disponivel: 0,
    },
    {
      id: '0896a982-6ee1-461e-bf09-bedbe1f482c2',
      nome: 'Beneficie-se da Escola do Ministério Teocrático (2001)',
      disponivel: 0,
    },

    {
      id: '06b099ac-e677-4c78-a225-d7c4d50b894c',
      nome: 'O Que a Bíblia Realmente Ensina? (2005, 2015)',
      disponivel: 0
    },

    {
      id: 'b842a94e-ad8a-4554-bdf2-ba12ad9755ce',
      nome: 'Você Pode Entender a Bíblia! (2016)',
      disponivel: 0
    },

    {
      id: '26210e58-d773-4890-a7b6-53237f0f62ba',
      nome: 'Tradução do Novo Mundo das Escrituras Sagradas (1984, 1986)',
      disponivel: 0
    },    
  ];
  */
  constructor(private literaturaService: LiteraturasService) { }

  ngOnInit(): void {
    this.literaturaService.getAllLiteraturas().
    subscribe({
      next: (literaturas) => {
        console.log(literaturas);
        this.literaturas = literaturas;
      },
      error: (response)=> console.log(response)
    });
  }

}
