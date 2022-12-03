import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { CityService } from 'src/app/service/city.service';
import { CollectorService } from 'src/app/service/collector.service';
import { CompanyService } from 'src/app/service/company.service';
import { StateService } from 'src/app/service/state.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalUser = 0
  totalCompany = 0
  totalCollector = 0
  totalAppointment = 0
  totalState = 0
  totalCity = 0

  constructor(private userService: UserService,
    private cityService: CityService,
    private stateServie: StateService,
    private appointmentService: AppointmentService,
    private companyService: CompanyService,
    private collectorService: CollectorService
  ) { }

  ngOnInit() {
    this.userService.getAllUser().then(res => {
      this.totalUser = res.data.length
    })

    this.cityService.getCity().then(res => {
      this.totalCity = res.data.length
    })

    this.stateServie.getState().then(res => {
      this.totalState = res.data.length
    })

    this.appointmentService.getAllAdminAppointment().then(res => {
      this.totalAppointment = res.data.length
    })

    this.companyService.getAllCompany().then(res => {
      this.totalCompany = res.data.length
    })

    this.collectorService.getAllCollector().then(res => {
      this.totalCollector = res.data.length
    })
  }

}
