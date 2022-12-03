import { Component } from '@angular/core';
import { SlotService } from 'src/app/service/slot.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent {
  listSlot: any = {}

  constructor(private slotService: SlotService) { }

  ngOnInit() {
    this.slotService.listSlot().then(res => {
      console.log("r ", res.data);
      this.listSlot = res.data
    })
  }

}
