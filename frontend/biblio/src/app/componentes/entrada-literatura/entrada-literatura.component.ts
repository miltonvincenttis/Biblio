import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estoque } from 'src/app/models/estoque.model';
import { EstoqueService } from 'src/app/services/estoque.service';
import { LiteraturasService } from 'src/app/services/literaturas.service';

@Component({
  selector: 'app-entrada-literatura',
  templateUrl: './entrada-literatura.component.html',
  styleUrls: ['./entrada-literatura.component.css']
})
export class EntradaLiteraturaComponent implements OnInit {
  entradaEstoqueRequest: Estoque = {
    id: '',
    nome: '',
    quantidade: 0
  }
  
  constructor(private route: ActivatedRoute, private literaturaService: LiteraturasService, private estoqueService: EstoqueService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.literaturaService.getLiteratura(id).
            subscribe({
              next: (response) => {
                this.entradaEstoqueRequest.id = response.id,
                this.entradaEstoqueRequest.nome = response.nome,
                this.entradaEstoqueRequest.quantidade = 0;  //--- deve aparecer na tela quantidade = 0
              }
            })
        }
      }
    });
  }

  entradaEstoque() {
    console.log(this.entradaEstoqueRequest);

    this.estoqueService.entradaEstoque(this.entradaEstoqueRequest.id, this.entradaEstoqueRequest).
      subscribe({
        next: (response) => {
          this.router.navigate(['literaturas-list']);
        }
      })
  }
}
