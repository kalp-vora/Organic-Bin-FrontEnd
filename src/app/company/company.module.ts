import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { RegisterComponent } from './register/register.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookappointmentComponent } from './appointment/bookappointment/bookappointment.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    AppointmentComponent,
    BookappointmentComponent,
    ProfileComponent,
    EditprofileComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})
export class CompanyModule { }
