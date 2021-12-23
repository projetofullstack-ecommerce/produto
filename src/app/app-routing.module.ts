import { AlteraProdutoComponent } from './altera-produto/altera-produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'novo-produto', component: NovoProdutoComponent },
  { path: 'detalhe-produto/:id', component: DetalheProdutoComponent },
  { path: 'altera-produto/:id', component: AlteraProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
