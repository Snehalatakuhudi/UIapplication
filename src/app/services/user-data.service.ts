import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoginRequestModel } from '../Models/user-requests';
import { RegisterModel } from '../Models/registerRequests';
import { addUserSkillsModel } from '../Models/addUserSkillsRequests';
import { updateUserModel } from '../Models/updateUserRequests';
 
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private _http: HttpClient) { }
   API_BaseUrl='http://localhost:5498/api/';
 
  LoginRequest(request: LoginRequestModel): Observable<any> {
    return this._http.post(this.API_BaseUrl+'/Profile/Login', request).pipe(map(res => { 
        return res;
    }));
  }

  RegisterRequest(request:RegisterModel): Observable<any> {
    return this._http.post(this.API_BaseUrl+'/User/AddUser', request).pipe(map(res => { 
        return res;
    }));
  } 

  GetUsersList():Observable<any>{
    return this._http.get(this.API_BaseUrl+'/Admin/Get').pipe(map(res => {
      return res;
    }));
  }

  DeleteUser(id):Observable<any>{
    return this._http.get(this.API_BaseUrl+'/Admin/DeleteUser?id='+id).pipe(map(res => {
      return res;
    }));
  }
  
  GetUserInfo(id):Observable<any>{
    return this._http.get(this.API_BaseUrl+'/User/GetUser?id='+id).pipe(map(res => {
      return res;
    }));
  }

  AddSkills(request:addUserSkillsModel):Observable<any>{
    return this._http.post(this.API_BaseUrl+'/User/AddSkills', request).pipe(map(res => { 
      return res;
  }));
  }
  
  UpdateUser(request:updateUserModel):Observable<any>{
    return this._http.post(this.API_BaseUrl+'/User/UpdateUser', request).pipe(map(res => { 
      return res;
  }));
  }
}
