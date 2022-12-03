import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AddressService } from 'src/app/service/address.service';
import { CityService } from 'src/app/service/city.service';
import { LoginRegisterService } from 'src/app/service/login-register.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signupForm: FormGroup = new FormGroup({});
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
      this.signupForm.getError('mismatch') &&
      this.signupForm.get('confirmPassword')?.touched
    );
  }

  constructor(
    private messageService: MessageService,
    private registerService: LoginRegisterService,
    private rout: Router,
    private cityService: CityService,
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
    this.cityService.getCity().then(res => {
      this.listCity = res.data;
      console.log("l ", res.data);
    })

    this.signupForm = new FormGroup({
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
      [RegisterComponent.MatchValidator('password', 'confirmPassword')])
  }

  getCity(value: string) {
    var state_id = value
    console.log("a ", value);

    this.cityService.getCityById(state_id).then(res => {
      this.listCity = res.data;
      console.log("r ", res);
    })
  }

  signup() {
    // console.log("s ",this.passwordMatchError);

    var sign = [{
      "name": this.signupForm.value.firstName + " " + this.signupForm.value.lastName,
      "email": this.signupForm.value.email,
      "contact": this.signupForm.value.contact,
      "password": this.signupForm.value.password,
      "gender": this.signupForm.value.gender,
      "dateOfBirth": this.signupForm.value.dateOfBirth,
      "role": "USER"
    }]
    // console.log("f ", sign[0]);

    if (this.signupForm.valid) {
      this.registerService.register(sign[0]).subscribe((res) => {
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
            "location": this.signupForm.value.location,
            "cityId": {
              "id": this.signupForm.value.cityId
            },
            "pincode": this.signupForm.value.pincode
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

