import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { FormsModule } from '@angular/forms';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { AlteraProdutoComponent } from './altera-produto/altera-produto.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, ProdutosComponent, NovoProdutoComponent, DetalheProdutoComponent, AlteraProdutoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatIconModule, FormsModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
