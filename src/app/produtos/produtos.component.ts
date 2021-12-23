import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../models/produto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private service: ProdutosService, private router: Router) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((produtos) => (this.produtos = produtos));
  }

  detalheProduto(id: number) {
    this.router.navigate(['detalhe-produto', id]);
  }

  alteraProduto(id: number) {
    this.router.navigate(['altera-produto', id]);
  }

  excluiProduto(id: number) {
    this.service.delete(id).subscribe(() => {
      const index = this.produtos.findIndex((it) => it.id === id);
      this.produtos.splice(index, 1);
    });
  }
}
