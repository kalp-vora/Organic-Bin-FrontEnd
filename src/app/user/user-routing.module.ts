import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookappointmentComponent } from './appointment/bookappointment/bookappointment.component';
import { LoginComponent } from './login/login.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'bookappointment', component: BookappointmentComponent, canActivate: [AuthGuard] },
  { path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
