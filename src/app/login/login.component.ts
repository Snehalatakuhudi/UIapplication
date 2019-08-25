import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequestModel } from '../Models/user-requests';
import { UserDataService } from '../services/user-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userLogin: LoginRequestModel;
  formValid: boolean = false;
  constructor(private _router: Router, private _userdataService: UserDataService) {
    this.userLogin = new LoginRequestModel();
  }

  ngOnInit() {
  }

  loginForm: FormGroup = new FormGroup({
    emailId: new FormControl(null, [Validators.required, Validators.email]),
    pwd: new FormControl(null, [Validators.required])
  });

  SubmitLoginForm() {
    if (this.loginForm.invalid) {
      this.formValid = true;
    }
    else {
      this.formValid = false;
      
      this._userdataService.LoginRequest(this.userLogin).subscribe(data => {
        const _loginResponse = data;
        if (_loginResponse.UsrType=="Admin") { 
          this._router.navigate(['/userList']);
          localStorage.setItem('UserName', _loginResponse.Name); 
          localStorage.setItem('UserId', _loginResponse.UserId);
        }
        else if (_loginResponse.UsrType=="User") { 
          this._router.navigate(['/profile']);
          localStorage.setItem('UserName', _loginResponse.Name);
          localStorage.setItem('UserId', _loginResponse.UserId);
        }
        else {
          alert("Invalid Credentials");
        }
      });

    }
  }

}
