import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { BookappointmentComponent } from './appointment/bookappointment/bookappointment.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AppointmentComponent, ProfileComponent, EditprofileComponent, BookappointmentComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [MessageService, ConfirmationService],

})
export class UserModule { }
