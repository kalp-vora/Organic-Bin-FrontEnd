import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{
  listAppointment: any = {}

  constructor(public apponintmentService: AppointmentService) { }

  ngOnInit(): void {
    console.log("hel");

    let userId = sessionStorage.getItem('isUserId')
    console.log("id ",userId);

    this.apponintmentService.getAppointmentById(userId).then(res => {
      console.log("r ", res.data);
      this.listAppointment = res.data
    })
  }
}
