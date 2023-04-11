import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { VacancyCardComponent } from './components/vacancy/vacancy-card/vacancy-card.component';
import { VacancyOfferComponent } from './components/vacancy/vacancy-offer/vacancy-offer.component';
import { ConfirmMailComponent } from './components/confirm-mail/confirm-mail.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { ResumeComponent } from './components/profile/resume/resume.component';
import { MakeResumeComponent } from './components/profile/make-resume/make-resume.component';


const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'confirm', component: ConfirmMailComponent },
  { path: 'vacancy', component: VacancyCardComponent },
  { path: 'vacancy-offer', component: VacancyOfferComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'resume', component:  ResumeComponent},
  { path: 'make-resume', component: MakeResumeComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
