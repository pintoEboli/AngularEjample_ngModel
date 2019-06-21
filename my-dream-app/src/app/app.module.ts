import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppComponentAppDavid } from './appDavid.component';
import { AppComponentForm1 } from './appForm.component';
import { TercerComponent } from './tercer/tercer.component';
import { CuartoComponent } from './cuarto/cuarto.component';
import { QuintoComponent } from './quinto/quinto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, AppComponentAppDavid , AppComponentForm1, TercerComponent, CuartoComponent, QuintoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
