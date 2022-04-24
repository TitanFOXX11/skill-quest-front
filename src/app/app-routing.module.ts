import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './components/cours/cours.component';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { ModulesComponent } from './components/modules/modules.component';

// TODO: faire le routing profil à l'ID

const routes: Routes = [
  {
    path: '',
    redirectTo: '/modules',
    pathMatch: 'full'
  },
  {
    path: 'modules',
    component: ModulesComponent,
  },
  {
    path: 'exercices',
    component: ExercicesComponent,
  },
  {
    path: 'cours',
    component: CoursComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
