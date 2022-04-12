import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRouting2Module } from './app-routing2.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListAnnoncesComponent,
    EstimationCoutComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, AppRouting2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
