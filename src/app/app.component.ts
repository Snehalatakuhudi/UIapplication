import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TaskApplication';
  IsLogin = false;
  router: any;
  authService: any;
 
  ngOnInit() {
    var login =localStorage.getItem("Email"); 
    this.IsLogin= (login!=null && login !="")? true:false;
  }
   logOut() {
    // this.router.navigate(['']); 
    localStorage.setItem('UserName',"");
    localStorage.setItem('Email', "");
    localStorage.setItem('UserId', "");
    this.IsLogin=true;
  }
}