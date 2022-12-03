import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { CollectorService } from 'src/app/service/collector.service';

@Component({
  selector: 'app-userappointment',
  templateUrl: './userappointment.component.html',
  styleUrls: ['./userappointment.component.css']
})
export class UserappointmentComponent implements OnInit {
  listAppointment: any = {}
  listCollector: any = {}

  constructor(
    public appointmentService: AppointmentService,
    private collectorService: CollectorService
  ) { }

  ngOnInit(): void {
    this.collectorService.getAllCollector().then(res => {
      this.listCollector = res.data
      console.log("c ", res);

    })

    this.appointmentService.getAllAdminAppointment().then(res => {
      this.listAppointment = res.data
      console.log("r ", res.data);
    })
  }

  accept(id: any, obj: any) {

    obj.status = 1
    obj.collectorId = {
      "id": id
    }
    //console.log("obj  ", obj);
    this.appointmentService.updateAdminAppointment(obj).subscribe(res => {
      console.log("done");
    })

  }

  reject(obj: any) {

    obj.status = 2
    // console.log("obj  ", obj);
    this.appointmentService.updateAdminAppointment(obj).subscribe(res => {
      console.log("done");
    })
  }
}
