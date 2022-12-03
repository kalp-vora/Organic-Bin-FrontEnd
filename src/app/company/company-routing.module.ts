import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookappointmentComponent } from './appointment/bookappointment/bookappointment.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'companyregister', component: RegisterComponent },
  { path: 'companyappointment', component: AppointmentComponent },
  { path: 'companyprofile', component: ProfileComponent },
  { path: 'companybookappointment', component: BookappointmentComponent },
  { path: 'companyeditprofile', component: EditprofileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
