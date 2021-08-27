// Copyright 2021,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// modules
import { RegionsOtwModule } from './regions-otw-client/regions-otw.module';
// components
import { PortalHomeComponent } from './portal-home/portal-home.component';

const routes: Routes = [
  {
    path: 'regions',
    loadChildren: (): Promise<RegionsOtwModule> => import('./regions-otw-client/regions-otw.module').then(module => {
      return module.RegionsOtwModule
    }),
    data: {
      title: 'Regions'
    }
  },
  {
    path: '',
    component: PortalHomeComponent,
    data: {
      title: 'Archive'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
