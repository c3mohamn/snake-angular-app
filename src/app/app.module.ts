import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTitleComponent } from './header/header-title/header-title.component';
import { SnakeGameComponent } from './body/snake-game/snake-game.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HeaderTitleComponent,
    SnakeGameComponent
  ],
  imports: [
    BrowserModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
