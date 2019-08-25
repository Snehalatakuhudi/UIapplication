import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UserDataService } from './../../services/user-data.service';
import{addUserSkillsModel} from './../../Models/addUserSkillsRequests';
@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.css']
})
export class ProfiledetailsComponent implements OnInit {
  _userProfile: any = [];
  isAddSkills:boolean =false;
  successMsg:boolean=false;
  isEdit:boolean=false;
  public userSkills: addUserSkillsModel;
  constructor(private _userdataservice: UserDataService,private datePipe: DatePipe) { 
    this.userSkills = new addUserSkillsModel();
  }

  ngOnInit() {
    this.GetUserData();
  } 

  GetUserData(){
    var id=localStorage.getItem('UserId')
    this._userdataservice.GetUserInfo(id).subscribe(data => {
      this._userProfile = data; 
      this._userProfile.DOB= this.datePipe.transform(data.DOB, 'dd/MM/yyyy')
    }); 
  }

  ChangeAddSkill(){
    this.isAddSkills=true;
  }

  AddUserSkill(){ 
    this.userSkills.UserId=localStorage.getItem('UserId');
    this._userdataservice.AddSkills(this.userSkills).subscribe(data => {
    if(data.Success=="True"){
      this.userSkills = new addUserSkillsModel();
      alert("skill added successfully...");
      this.GetUserData();
    }else{
       alert(data.Result);
    } 
    }); 
  }
  EditUser(){
    this.isEdit=true;
  }
  UpdateUser(){
    this._userProfile.UserId=localStorage.getItem('UserId');
    this._userdataservice.UpdateUser(this._userProfile).subscribe(data => {
      if(data.Success=="True"){
       alert("update successfully...");
        this.isEdit=false;
        this.GetUserData();
      }else{
         alert(data.Result);
      } 
      });  
  }
}
