import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

const productsRouting: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: ProductDetailsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productsRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
