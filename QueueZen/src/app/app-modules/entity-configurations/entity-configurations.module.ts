import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//* == Component Of Menu == *//
import { EntityConfigurationsMainComponent } from './component/entity-configurations-main/entity-configurations-main.component';
//* ======================= *//
const components = [
  EntityConfigurationsMainComponent
];
@NgModule({
  imports: [
    CommonModule,
  ]
  , declarations: components
  , entryComponents: components
  , exports: components
  , bootstrap: components
  , providers: [
  ]
})
export class EntityConfigurationsModule { }
