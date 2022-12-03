import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listUsers: any = {}

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem('isAdminId')
    console.log("id ", id);

    this.userService.getAllUser().then(res => {
      this.listUsers = res.data
      console.log("r ", this.listUsers);

    })
  }
}
