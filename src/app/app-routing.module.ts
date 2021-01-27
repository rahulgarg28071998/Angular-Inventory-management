import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes =  [
  {
      path: 'category',
      component: CategoryComponent
  },
  {
      path: 'productList',
      component: ProductComponent
  },
  {
      path: 'product',
      component: ProductListComponent
  },
  {
      path: '',
      redirectTo: '/category',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/category',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
