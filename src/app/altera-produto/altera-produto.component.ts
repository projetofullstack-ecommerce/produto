import { Produto } from './../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-altera-produto',
  templateUrl: './altera-produto.component.html',
  styleUrls: ['./altera-produto.component.css'],
})
export class AlteraProdutoComponent implements OnInit {
  id: number = 0;
  produto: Produto = { id: 0, codigo: '', nome: '', preco: 0 };

  constructor(
    private service: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  alterar() {
    this.service
      .update(this.id, this.produto)
      .subscribe(() => this.router.navigateByUrl('produtos'));
  }

  onSubmit() {
    this.alterar();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service
      .findById(this.id)
      .subscribe((produto) => (this.produto = produto));
  }
}
