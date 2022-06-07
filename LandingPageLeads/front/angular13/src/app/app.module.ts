import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { ListarComponent } from './components/listar/listar.component';
//Backend al Fronend
import { HttpClientModule } from '@angular/common/http';

//component

@NgModule({
  declarations: [
    AppComponent,
    CrearRegistroComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
