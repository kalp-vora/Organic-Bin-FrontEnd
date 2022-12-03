import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityComponent } from './city/city.component';
import { StateComponent } from './state/state.component';
import { AddeditcityComponent } from './city/addeditcity/addeditcity.component';
import { AddeditstateComponent } from './state/addeditstate/addeditstate.component';
import { UserappointmentComponent } from './userappointment/userappointment.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectorComponent } from './collector/collector.component';
import { AddeditcollectorComponent } from './collector/addeditcollector/addeditcollector.component';
import { SlotComponent } from './slot/slot.component';
import { AddeditslotComponent } from './slot/addeditslot/addeditslot.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompanyComponent } from './company/company.component';
import { CompanyappointmentComponent } from './companyappointment/companyappointment.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CityComponent,
    StateComponent,
    AddeditcityComponent,
    AddeditstateComponent,
    UserappointmentComponent,
    UserComponent,
    CollectorComponent,
    AddeditcollectorComponent,
    SlotComponent,
    AddeditslotComponent,
    HeaderComponent,
    CompanyComponent,
    CompanyappointmentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})
export class AdminModule { }
