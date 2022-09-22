import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estoque } from 'src/app/models/estoque.model';
import { EstoqueService } from 'src/app/services/estoque.service';
import { LiteraturasService } from 'src/app/services/literaturas.service';

@Component({
  selector: 'app-saida-literatura',
  templateUrl: './saida-literatura.component.html',
  styleUrls: ['./saida-literatura.component.css']
})


export class SaidaLiteraturaComponent implements OnInit {

  saidaEstoqueRequest: Estoque = {
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
                this.saidaEstoqueRequest.id = response.id,
                this.saidaEstoqueRequest.nome = response.nome,
                this.saidaEstoqueRequest.quantidade = 0;  //--- deve aparecer na tela quantidade = 0
              }
            })
        }
      }
    });
  }

  saidaEstoque() {
    console.log(this.saidaEstoqueRequest);

    this.estoqueService.saidaEstoque(this.saidaEstoqueRequest.id, this.saidaEstoqueRequest).
      subscribe({
        next: (response) => {
          this.router.navigate(['literaturas-list']); 
        }
      })
  }
}
