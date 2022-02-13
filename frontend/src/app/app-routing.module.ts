import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/content/about/about.component';
import { ConceptComponent } from './components/content/concept/concept.component';
import { PricesComponent } from './components/content/prices/prices.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent      },
  { path: 'concept' , component: ConceptComponent   },
  { path: 'prices'  , component: PricesComponent    },
  { path: 'about-us', component: AboutComponent     },
  { path: 'login'   , component: LoginComponent     },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }