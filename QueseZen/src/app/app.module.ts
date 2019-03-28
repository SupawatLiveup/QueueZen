import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppBaseModule } from './app-base/app-base.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewService } from './services/view/view.service';

//*== Menu Module ==*//
import { BranchManagementModule } from './app-modules/branch-management/branch-management.module'
import { EntityConfigurationsModule } from './app-modules/entity-configurations/entity-configurations.module';
//*================*//

import lcoaleTh from '@angular/common/locales/th';
import { registerLocaleData } from '@angular/common';
registerLocaleData(lcoaleTh);

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppBaseModule,

    //*== Menu Module ==*//
    BranchManagementModule,
    EntityConfigurationsModule,
    //*================*//
  ],
  declarations: [
    AppComponent
  ],
  providers: [ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
