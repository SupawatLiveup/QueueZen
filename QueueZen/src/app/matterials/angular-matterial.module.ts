import { NgModule } from '@angular/core';

import {
  MatAutocompleteModule
  , MatButtonModule
  , MatButtonToggleModule
  , MatCardModule
  , MatCheckboxModule
  , MatChipsModule
  , MatDatepickerModule
  , MatDialogModule
  , MatDividerModule
  , MatExpansionModule
  , MatGridListModule
  , MatIconModule
  , MatInputModule
  , MatListModule
  , MatMenuModule
  , MatNativeDateModule
  , MatPaginatorModule
  , MatProgressBarModule
  , MatProgressSpinnerModule
  , MatRadioModule
  , MatRippleModule
  , MatSelectModule
  , MatSidenavModule
  , MatSliderModule
  , MatSlideToggleModule
  , MatSnackBarModule
  , MatSortModule
  , MatStepperModule
  , MatTableModule
  , MatTabsModule
  , MatToolbarModule
  , MatTooltipModule
} from '@angular/material';

import {
  FormsModule
  , ReactiveFormsModule
} from '@angular/forms';

import {
  CdkTableModule
} from '@angular/cdk/table';

const modules = [
  MatAutocompleteModule
  , MatButtonModule
  , MatButtonToggleModule
  , MatCardModule
  , MatCheckboxModule
  , MatChipsModule
  , MatDatepickerModule
  , MatDialogModule
  , MatDividerModule
  , MatExpansionModule
  , MatGridListModule
  , MatIconModule
  , MatInputModule
  , MatListModule
  , MatMenuModule
  , MatNativeDateModule
  , MatPaginatorModule
  , MatProgressBarModule
  , MatProgressSpinnerModule
  , MatRadioModule
  , MatRippleModule
  , MatSelectModule
  , MatSidenavModule
  , MatSliderModule
  , MatSlideToggleModule
  , MatSnackBarModule
  , MatSortModule
  , MatStepperModule
  , MatTableModule
  , MatTabsModule
  , MatToolbarModule
  , MatTooltipModule
  , FormsModule
  , ReactiveFormsModule
  , CdkTableModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class AngularMatterialModule { }
