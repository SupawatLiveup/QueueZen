import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchManagementMainComponent } from './component/branch-management-main/branch-management-main.component';

const components = [
  BranchManagementMainComponent
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
export class BranchManagementModule { }
