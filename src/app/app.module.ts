import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ConfirmMailComponent } from './components/confirm-mail/confirm-mail.component';
import { VacancyCardComponent } from './components/vacancy/vacancy-card/vacancy-card.component';
import { VacancyOfferComponent } from './components/vacancy/vacancy-offer/vacancy-offer.component';
import { FavouritesComponent } from './components/profile/favourites/favourites.component';
import { ResumeComponent } from './components/profile/resume/resume.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { MakeResumeComponent } from './components/profile/make-resume/make-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ConfirmMailComponent,
    VacancyCardComponent,
    VacancyOfferComponent,
    FavouritesComponent,
    ResumeComponent,
    ProfileComponent,
    SettingsComponent,
    MakeResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
