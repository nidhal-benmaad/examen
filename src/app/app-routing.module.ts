import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { HomeComponent } from './home/home.component';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'list', component: ListAnnoncesComponent },
      { path: 'estimation', component: EstimationCoutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
