import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SlotService } from 'src/app/service/slot.service';

@Component({
  selector: 'app-addeditslot',
  templateUrl: './addeditslot.component.html',
  styleUrls: ['./addeditslot.component.css']
})
export class AddeditslotComponent {
  slotForm: FormGroup = new FormGroup({});

  constructor(private slotService: SlotService,
    private rout: Router,
    private messageService: MessageService) { }

  ngOnInit() {
    this.slotForm = new FormGroup({
      timeFrame: new FormControl('', Validators.required),
    })
  }

  submit() {
    this.slotService.addSlot(this.slotForm.value).subscribe(res => {
      console.log("done");
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Successfully Added!!',
      });
      this.rout.navigateByUrl('admin/slot')
    })
  }
}
