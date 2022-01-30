import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { ConceptComponent } from './content/concept/concept.component';
import { PricesComponent } from './content/prices/prices.component';
import { SigninComponent } from './content/signin/signin.component';

const routes: Routes = [
  { path: 'concept',  component: ConceptComponent },
  { path: 'prices',   component: PricesComponent  },
  { path: 'about-us', component: AboutComponent   },
  { path: 'sign-in',  component: SigninComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }