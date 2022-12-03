import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data = {} as User

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem('isUserId')
    console.log("id ", id);


    if (sessionStorage.getItem('isLogin') == undefined){
      console.log("t");

    }else{
      console.log("f");

    }

    this.userService.getUserById(id).then(res => {
      this.data = res.data[0]
      console.log("r ", this.data);

    })
  }
}
