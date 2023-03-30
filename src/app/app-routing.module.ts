import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { VacancyCardComponent } from './components/cards/vacancy-card/vacancy-card.component';
import { ConfirmMailComponent } from './components/confirm-mail/confirm-mail.component';
import { MainComponent } from './components/main/main.component';


const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'confirm', component: ConfirmMailComponent },
  { path: 'vacancy', component: VacancyCardComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
