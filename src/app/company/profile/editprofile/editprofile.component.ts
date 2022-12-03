import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  data = {} as User
  editForm: FormGroup = new FormGroup({});

  constructor(private userService: UserService) { }

  get isCompanyLoginIn() {
    return this.userService.isCompanyLogIn();
  }


  ngOnInit(): void {
    let id = sessionStorage.getItem('isCompanyId')
    console.log("id ", id);

    this.userService.getUserById(id).then(res => {
      this.data = res.data[0]
      console.log("r ", this.data);

      this.editForm = new FormGroup({
        userId: new FormControl(this.data.id, Validators.required),
        name: new FormControl(this.data.name, Validators.required),
        email: new FormControl(this.data.email, Validators.required),
        contact: new FormControl(this.data.contact, Validators.required),
        location: new FormControl(this.data.location, Validators.required),
        pincode: new FormControl(this.data.pincode, Validators.required),
        city: new FormControl(this.data.city, Validators.required),
      });
    })
  }

  submit() {

  }
}
