import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {HomeComponent} from "./home/home.component";
import {FaqComponent} from "./faq/faq.component";




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent } ,

];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
