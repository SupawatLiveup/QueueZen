import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './login/login-routing.module';
import { AngularMatterialModule } from 'src/app/matterials/angular-matterial.module';

import { AppService } from 'src/app/services/app/app.service';
import { ViewService } from 'src/app/services/view/view.service';
import { GlobalFunctionService } from 'src/app/services/global-function/global-function.service';

import { MenuConfig } from 'src/app/config/class/menu-config';

import { LoginComponent } from './login/login.component';
import { HomepageComponent } from 'src/app/app-modules/homepage/homepage.component';
import { SwitcherComponent } from './switcher/switcher.component';

// * == Menu Module == * //
import { EntityConfigurationsModule } from 'src/app/app-modules/entity-configurations/entity-configurations.module';
import { BranchManagementModule } from 'src/app/app-modules/branch-management/branch-management.module';
import { QueueDashboardModule } from 'src/app/app-modules/queue-dashboard/queue-dashboard.module';
// * ================ * //

const components = [
  LoginComponent
  , HomepageComponent
  , SwitcherComponent
];
@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , HttpClientModule
    , LoginRoutingModule
    , AngularMatterialModule
    /* == Menu Module == */
    , EntityConfigurationsModule
    , BranchManagementModule
    , QueueDashboardModule
    /* ================ */
  ]
  , declarations: components
  , entryComponents: components
  , exports: components
  , providers: [
    AppService
    , ViewService
    , GlobalFunctionService
    , MenuConfig
  ]
})
export class AppBaseModule { }
