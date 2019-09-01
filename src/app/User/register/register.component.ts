import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{RegisterModel} from './../../Models/registerRequests'
import{UserDataService} from './../../services/user-data.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userRegister: RegisterModel;
  RegForm: boolean = false;
  successMsg:boolean=false;
    constructor(private _router: Router,private _userdataService: UserDataService) {
    this.userRegister = new RegisterModel();
  }

  ngOnInit() {
  }

  RegisterForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]), 
    dobCtrl: new FormControl(null, [Validators.required]),
    location: new FormControl(null, [Validators.required]),
    emailCtrl: new FormControl(null, [Validators.required, Validators.email]),
    pwdCtrl: new FormControl(null, [Validators.required])

  });

  SubmitRegisterForm() {
    if (this.RegisterForm.invalid) {
      this.RegForm = true;
    }
    else {
      this.RegForm = false;
      this.userRegister.UsrType="User"
      this._userdataService.RegisterRequest(this.userRegister).subscribe(data => {
          if(data.Success=="True"){
              this.successMsg=true;
              this.userRegister = new RegisterModel();
            }else{
                    alert(data.Result);
            }
      });
    }
  }

}
