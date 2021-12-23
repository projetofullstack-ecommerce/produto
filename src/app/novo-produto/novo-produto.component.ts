import { Produto } from './../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css'],
})
export class NovoProdutoComponent implements OnInit {
  produto: Produto = {id:0, codigo: '', nome: '', preco: 0};

  constructor(private service: ProdutosService, private router: Router) {}

  incluir() {
    this.service
      .create(this.produto)
      .subscribe(() => this.router.navigateByUrl('produtos'));
  }

  onSubmit() {
    this.incluir();
  }

  ngOnInit(): void {}
}
