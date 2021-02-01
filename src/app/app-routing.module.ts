import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes =  [
  {
      path: 'category',
      component: CategoryComponent
  },
  {
      path: 'productList',
      component:  ProductListComponent,
      children:[{ path: ':category', component:  ProductListComponent}]
  },
  {
      path: 'product',
      component: ProductComponent
  },
  { path: 'product/:id', component: ProductDetailComponent },
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
