import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTitleComponent } from './header/header-title/header-title.component';
import { SnakeGameComponent } from './body/snake-game/snake-game.component';
import { SnakeComponent } from './body/snake-game/snake/snake.component';
import { AboutComponent } from './body/about/about.component';
import { ProductComponent } from './body/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SnakeGameComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product/:id', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HeaderTitleComponent,
    SnakeGameComponent,
    SnakeComponent,
    AboutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
