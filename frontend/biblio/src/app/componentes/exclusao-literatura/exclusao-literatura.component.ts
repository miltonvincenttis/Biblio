import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Literatura } from 'src/app/models/literatura.model';
import { LiteraturasService } from 'src/app/services/literaturas.service';

@Component({
  selector: 'app-exclusao-literatura',
  templateUrl: './exclusao-literatura.component.html',
  styleUrls: ['./exclusao-literatura.component.css']
})
export class ExclusaoLiteraturaComponent implements OnInit {
  exclusaoLiteraturaRequest: Literatura = {
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
                this.exclusaoLiteraturaRequest.id = response.id,
                this.exclusaoLiteraturaRequest.nome = response.nome,
                this.exclusaoLiteraturaRequest.disponivel = response.disponivel
              }
            })
        }
      }
    });
  }

  excluirLiteratura() {
    this.literaturaService.exclusaoLiteratura(this.exclusaoLiteraturaRequest.id).
      subscribe({
        next: (response) => {
          this.router.navigate(['literaturas-list']);
        }
      })
  }  
}
