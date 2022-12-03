import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AddressService } from 'src/app/service/address.service';
import { CityService } from 'src/app/service/city.service';
import { CollectorService } from 'src/app/service/collector.service';

@Component({
  selector: 'app-addeditcollector',
  templateUrl: './addeditcollector.component.html',
  styleUrls: ['./addeditcollector.component.css']
})
export class AddeditcollectorComponent {
  collectorForm: FormGroup = new FormGroup({});
  listCity: any = {}
  userId = 0

  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }

  get passwordMatchError() {
    return (
      this.collectorForm.getError('mismatch') &&
      this.collectorForm.get('confirmPassword')?.touched
    );
  }

  constructor(
    private messageService: MessageService,
    private rout: Router,
    private cityService: CityService,
    private addressService: AddressService,
    private collectorService:CollectorService
  ) { }

  ngOnInit(): void {
    this.cityService.getCity().then(res => {
      this.listCity = res.data;
      console.log("l ", res.data);
    })

    this.collectorForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      cityId: new FormControl('', Validators.required)
    },
      [AddeditcollectorComponent.MatchValidator('password', 'confirmPassword')])
  }

  getCity(value: string) {
    var state_id = value
    console.log("a ", value);

    this.cityService.getCityById(state_id).then(res => {
      this.listCity = res.data;
      console.log("r ", res.data);
    })
  }

  submit() {
    var sign = [{
      "name": this.collectorForm.value.firstName + " " + this.collectorForm.value.lastName,
      "email": this.collectorForm.value.email,
      "contact": this.collectorForm.value.contact,
      "password": this.collectorForm.value.password,
      "gender": this.collectorForm.value.gender,
      "dateOfBirth": this.collectorForm.value.dateOfBirth,
      "role": "COLLECTOR"
    }]
    // console.log("f ", sign[0]);

    if (this.collectorForm.valid) {
      this.collectorService.addCollector(sign[0]).subscribe((res) => {
        console.log("r ", res);
        if (res.message != "FAILED, USER ALREADY EXIST") {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Successfully Signup!!',
          });
          this.userId = res.data.id
          var address = [{
            "userId": {
              "id": this.userId
            },
            "location": this.collectorForm.value.location,
            "cityId": {
              "id": this.collectorForm.value.cityId
            },
            "pincode": this.collectorForm.value.pincode
          }]
          console.log("add ", address);

          this.addressService.addAddress(address[0]).subscribe(res => {
            console.log("done");
          })
          // this.rout.navigateByUrl('signup-login');
        } else {
          console.log("r1", res);
          this.messageService.add({
            severity: 'warn',
            summary: 'Warn',
            detail: 'You have already registered!!',
          });
        }
      });
    }
    else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Please Enter All Fields!!' });
    }

  }
}
