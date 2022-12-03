import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-companyappointment',
  templateUrl: './companyappointment.component.html',
  styleUrls: ['./companyappointment.component.css']
})
export class CompanyappointmentComponent implements OnInit {
  listAppointment: any = {}

  constructor(
    public appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    this.appointmentService.getAllAdminCompanyAppointment().then(res => {
      this.listAppointment = res.data
      console.log("r ", res.data);
    })
  }

  accept(obj: any) {

    obj.status = 1
    //console.log("obj  ", obj);

    this.appointmentService.updateAdminCompanyAppointment(obj).subscribe(res => {
      console.log("done");
    })

  }

  reject(obj: any) {

    obj.status = 2
    obj.message="SORRY, WE ARE UNABLE TO FULFILL YOUR REQUEST"
    // console.log("obj  ", obj);
    this.appointmentService.updateAdminCompanyAppointment(obj).subscribe(res => {
      console.log("done");
    })
  }
}
