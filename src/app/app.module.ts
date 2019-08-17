import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialModule} from './material/material.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SideNavComponent } from './_shared/components/side-nav/side-nav.component';
import { MainNavComponent } from './_shared/components/main-nav/main-nav.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { CrmComponent } from './views/projects/crm/crm.component';
import { InventoryComponent } from './views/projects/inventory/inventory.component';
import { SportsComponent } from './views/projects/sports/sports.component';
import { TriviaComponent } from './views/projects/trivia/trivia.component';
import { HangmanComponent } from './views/projects/hangman/hangman.component';
import { ResumeComponent } from './views/resume/resume.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    MainNavComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    CrmComponent,
    InventoryComponent,
    SportsComponent,
    TriviaComponent,
    HangmanComponent,
    ResumeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
