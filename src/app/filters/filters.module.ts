// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { FiltersComponent } from './filters.component';

@NgModule({
  declarations: [
    FiltersComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FiltersComponent
  ]
})
export class FiltersModule { }
