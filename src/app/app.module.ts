import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BottomComponent } from './Components/bottom/bottom.component';
import { MaincontentComponent } from './Components/maincontent/maincontent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BottomComponent,
    MaincontentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
