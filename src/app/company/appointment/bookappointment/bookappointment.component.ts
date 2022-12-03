import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppointmentService } from 'src/app/service/appointment.service';
import { SlotService } from 'src/app/service/slot.service';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent {
  appointmentForm: FormGroup = new FormGroup({});
  money = 0;
  listSlot: any = {}
  // userId = 0

  constructor(private slotService: SlotService,
    private messageService: MessageService,
    private appointmentService: AppointmentService,
    private rout: Router) { }

  ngOnInit() {

    let userId = sessionStorage.getItem('isCompanyId')

    this.slotService.listSlot().then(res => {
      this.listSlot = res.data;
      console.log("l ", res.data);
    })

    this.appointmentForm = new FormGroup({
      wasteType: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      approxWeight: new FormControl('', Validators.required),
      userId: new FormControl(userId, Validators.required)
    })
  }

  getData(value: string) {
    if (this.appointmentForm.value.wasteType == "segregate") {
      this.money = this.appointmentForm.value.approxWeight * 20
    } else if (this.appointmentForm.value.wasteType == "nonsegregate") {
      this.money = this.appointmentForm.value.approxWeight * 10
    }
  }

  submit() {
    var data = [{
      "date": this.appointmentForm.value.date,
      "message": "",
      "status": 0,
      "userId": {
        "id": this.appointmentForm.value.userId
      },
      "weight": this.appointmentForm.value.approxWeight
    }]

    if (this.appointmentForm.valid) {
      this.appointmentService.addCompanyAppointment(data[0]).subscribe((res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Successfully Booked!!',
        });
        console.log("r ", res);
        this.rout.navigateByUrl('companyappointment');
      });
    }
    else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Please Enter All Fields!!' });
    }

  }
}
