import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { MessageService } from 'primeng/api';
import { LoginRegisterService } from 'src/app/service/login-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private messageService: MessageService,
    private loginService: LoginRegisterService,
    private rout: Router
  ) { }

  ngOnInit(): void {



    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    if (this.loginForm.valid) {
      try {
        this.loginService.login(this.loginForm.value).subscribe((res) => {
          console.log("r1 ", res);
          console.log("r2 ", res.body.data);

          if (res.status == 200) {
            console.log("");
            if (res.body.data.role == "USER") {
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Successfully Login User!!',
              });
              let id = res.body.data.userId
              let token = res.body.data.token
              sessionStorage.setItem("isLogin", "true");
              sessionStorage.setItem("isUserId", id);
              sessionStorage.setItem("isToken", token);

              this.rout.navigate(['/']);
            }
            else if (res.body.data.role == "ADMIN") {

              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Successfully Login Admin!!',
              });
              let id = res.body.data.userId
              let token = res.body.data.token
              sessionStorage.setItem("isAdmin", "true");
              sessionStorage.setItem("isAdminId", id);
              sessionStorage.setItem("isToken", token);

              this.rout.navigate(['/admin/dashboard']);
            }
            else if (res.body.data.role == "COMPANY") {

              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Successfully Login Company!!',
              });
              let id = res.body.data.userId
              let token = res.body.data.token
              sessionStorage.setItem("isCompany", "true");
              sessionStorage.setItem("isCompanyId", id);
              sessionStorage.setItem("isToken", token);

              this.rout.navigate(['/']);
            }
          }
          else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'User Not Found!!',
            });
            // console.log("r ", res.data.id);
          }
        });
      } catch (HttpErrorResponse) {
        console.log("err");
      }
    }
    else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Please Enter All Fields!!' });
    }
  }
}
