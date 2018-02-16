import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './body/snake-game/snake-game.module#SnakeGameModule' },
  { path: 'about', loadChildren: './body/about/about.module#AboutModule' },
  { path: 'product/:id', loadChildren: './body/product/product.module#ProductModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class RoutingModule { }
