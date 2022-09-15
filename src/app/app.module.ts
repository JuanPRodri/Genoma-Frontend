import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnalisisComponent } from './analisis/analisis.component';
import { MutacionComponent } from './mutacion/mutacion.component';
import { FormsModule, ReactiveFormsModule, FormGroup}   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnalisisComponent,
    MutacionComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
