import { Produto } from './../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css'],
})
export class DetalheProdutoComponent implements OnInit {
  id: number = 0;
  produto: Produto = { id: 0, codigo: '', nome: '', preco: 0 };

  constructor(
    private service: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  voltar() {
    this.router.navigateByUrl('produtos');
  }

  onSubmit() {
    this.voltar();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service
      .findById(this.id)
      .subscribe((produto) => (this.produto = produto));
  }
}
