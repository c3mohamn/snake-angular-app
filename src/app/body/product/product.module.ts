import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: ProductComponent}]),
    CommonModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
