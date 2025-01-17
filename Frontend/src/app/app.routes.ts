import { Routes } from '@angular/router';

export const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo:'maquinas'},
  { path:'maquinas',
    loadChildren: () => import('./maquinas/maquinas.module').then(m => m.MaquinasModule)
  }
];
