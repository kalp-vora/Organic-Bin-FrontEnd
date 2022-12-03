import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-addeditstate',
  templateUrl: './addeditstate.component.html',
  styleUrls: ['./addeditstate.component.css']
})
export class AddeditstateComponent {
  stateForm: FormGroup = new FormGroup({});

  constructor(private stateService: StateService,
    private rout: Router,
    private messageService: MessageService) { }

  ngOnInit() {
    this.stateForm = new FormGroup({
      name: new FormControl('', Validators.required),
    })
  }

  submit() {
    this.stateService.addState(this.stateForm.value).subscribe(res => {
      console.log("done");
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Successfully Added!!',
      });
      this.rout.navigateByUrl('admin/state')
    })
  }
}
