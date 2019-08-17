import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ResumeComponent } from './views/resume/resume.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

import { InventoryComponent } from './views/projects/inventory/inventory.component';
import { SportsComponent } from './views/projects/sports/sports.component';
import { TriviaComponent } from './views/projects/trivia/trivia.component';
import { HangmanComponent } from './views/projects/hangman/hangman.component';



const routes: Routes = [
  {
    path: 'Home', component: HomeComponent

  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Projects',
    component: ProjectsComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'Resume',
    component: ResumeComponent
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
