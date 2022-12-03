import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interface/user';
import { AddressService } from 'src/app/service/address.service';
import { CityService } from 'src/app/service/city.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  data = {} as User
  editForm: FormGroup = new FormGroup({});
  listCity: any = {}

  constructor(private userService: UserService,
    private messageService: MessageService,
    private addressService: AddressService,
    private rout: Router,
    private cityService: CityService

  ) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem('isUserId')
    console.log("id ", id);

    this.cityService.getCity().then(res => {
      this.listCity = res.data;
      console.log("l ", res.data);
    })

    this.userService.getUserById(id).then(res => {
      this.data = res.data[0]
      console.log("r1 ", this.data);

      const splitOnSpace = this.data.name.split(' ');
      // console.log("s ", splitOnSpace[0]);
      this.data.id = Number(id)
      this.data.firstName = splitOnSpace[0]
      this.data.lastName = splitOnSpace[1]

      this.editForm = new FormGroup({
        userId: new FormControl(this.data.id, Validators.required),
        firstName: new FormControl(splitOnSpace[0], Validators.required),
        lastName: new FormControl(splitOnSpace[1], Validators.required),
        email: new FormControl(this.data.email, Validators.required),
        // password: new FormControl(this.data.password, Validators.required),
        contact: new FormControl(this.data.contact, Validators.required),
        gender: new FormControl(this.data.gender, Validators.required),
        dateOfBirth: new FormControl(this.data.date_of_birth, Validators.required),
        location: new FormControl(this.data.location, Validators.required),
        pincode: new FormControl(this.data.pincode, Validators.required),
        cityId: new FormControl(this.data.city_id, Validators.required),
      });
    })
  }

  submit() {
    var sign = [{
      "id": this.data.id,
      "name": this.editForm.value.firstName + " " + this.editForm.value.lastName,
      "email": this.editForm.value.email,
      "password": this.data.password,
      "contact": this.editForm.value.contact,
      "gender": this.editForm.value.gender,
      "dateOfBirth": this.editForm.value.dateOfBirth,
      "role": "USER"
    }]
    // console.log("f ", sign[0]);

    if (this.data.id) {
      this.userService.updateUser(sign[0]).subscribe((res) => {
        // console.log("r ", res);

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Successfully Updated!!',
        });

        var address = [{
          "cityId": {
            "id": this.editForm.value.cityId
          },
          "id": this.data.address_id,
          "userId": {
            "id": this.data.id
          },
          "location": this.editForm.value.location,
          "pincode": this.editForm.value.pincode
        }]
        console.log("add ", address);

        this.addressService.updateAddress(address[0]).subscribe(res => {
          console.log("done");
        })
        this.rout.navigateByUrl('profile');

      });
    }
  }
}

