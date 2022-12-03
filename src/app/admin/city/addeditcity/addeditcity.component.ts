import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CityService } from 'src/app/service/city.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-addeditcity',
  templateUrl: './addeditcity.component.html',
  styleUrls: ['./addeditcity.component.css']
})
export class AddeditcityComponent implements OnInit {
  cityForm: FormGroup = new FormGroup({});
  listState: any = {}

  constructor(private stateService: StateService,
    private cityService: CityService,
    private rout: Router,
    private messageService: MessageService) { }

  ngOnInit() {
    this.stateService.getState().then(res => {
      console.log("r ", res.data);
      this.listState = res.data
    })

    this.cityForm = new FormGroup({
      name: new FormControl('', Validators.required),
      stateId: new FormControl('', Validators.required)
    })
  }

  submit() {

    var data = [{
      "name": this.cityForm.value.name,
      "stateId": {
        "id": this.cityForm.value.stateId
      }
    }]

    this.cityService.addCity(data[0]).subscribe(res => {
      console.log("done");
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Successfully Added!!',
      });
      this.rout.navigateByUrl('admin/city')
    })
  }
}
