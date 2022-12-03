import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AddeditcityComponent } from './city/addeditcity/addeditcity.component';
import { CityComponent } from './city/city.component';
import { AddeditcollectorComponent } from './collector/addeditcollector/addeditcollector.component';
import { CollectorComponent } from './collector/collector.component';
import { CompanyComponent } from './company/company.component';
import { CompanyappointmentComponent } from './companyappointment/companyappointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AddeditslotComponent } from './slot/addeditslot/addeditslot.component';
import { SlotComponent } from './slot/slot.component';
import { AddeditstateComponent } from './state/addeditstate/addeditstate.component';
import { StateComponent } from './state/state.component';
import { UserComponent } from './user/user.component';
import { UserappointmentComponent } from './userappointment/userappointment.component';

const routes: Routes = [
  {
    path: 'admin', component: HeaderComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'city', component: CityComponent },
      { path: 'addcity', component: AddeditcityComponent },
      { path: 'userappointment', component: UserappointmentComponent },
      { path: 'user', component: UserComponent },
      { path: 'collector', component: CollectorComponent },
      { path: 'addcollector', component: AddeditcollectorComponent },
      { path: 'state', component: StateComponent },
      { path: 'addstate', component: AddeditstateComponent },
      { path: 'slot', component: SlotComponent },
      { path: 'addslot', component: AddeditslotComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'companyappointment', component: CompanyappointmentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
