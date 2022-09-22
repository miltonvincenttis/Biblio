import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Literatura } from 'src/app/models/literatura.model';
import { LiteraturasService } from 'src/app/services/literaturas.service';

@Component({
  selector: 'app-alteracao-literatura',
  templateUrl: './alteracao-literatura.component.html',
  styleUrls: ['./alteracao-literatura.component.css']
})
export class AlteracaoLiteraturaComponent implements OnInit {

  alteracaoLiteraturaRequest: Literatura = {
    id: '',
    nome: '',
    disponivel: 0
  }
  constructor(private route: ActivatedRoute, private literaturaService: LiteraturasService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.literaturaService.getLiteratura(id).
            subscribe({
              next: (response) => {
                this.alteracaoLiteraturaRequest.id = response.id,
                this.alteracaoLiteraturaRequest.nome = response.nome,
                this.alteracaoLiteraturaRequest.disponivel = response.disponivel
              }
            })
        }
      }
    });
  }

  atualizarLiteratura() {
    this.literaturaService.alteracaoLiteratura(this.alteracaoLiteraturaRequest.id, this.alteracaoLiteraturaRequest).
      subscribe({
        next: (response) => {
          this.router.navigate(['literaturas-list']);
        }
      })
  }
}
