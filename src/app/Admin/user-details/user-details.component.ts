import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from  './../../services/user-data.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

   constructor(private _userdataService: UserDataService) {}
   _getUsersList :any;
  
   ngOnInit() {
    this._userdataService.GetUsersList().subscribe(data => {
      this._getUsersList = data[0];
  });
  }
  DeleterUser(id:any) { 
  this._userdataService.DeleteUser(id).subscribe(data => {
    this._userdataService.GetUsersList().subscribe(data => {
      this._getUsersList = data[0];
      });
    });
  }
}