import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { NavcomponentComponent } from './navcomponent/navcomponent.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    NavcomponentComponent,
    MaincomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
