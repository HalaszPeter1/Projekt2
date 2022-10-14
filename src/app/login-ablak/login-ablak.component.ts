import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-ablak',
  templateUrl: './login-ablak.component.html',
  styleUrls: ['./login-ablak.component.css']
})
export class LoginAblakComponent implements OnInit {

  public lblUsername:string = "Felhasználónév:"
  public lblPassword:string = "Jelszó:"
  public lblSubmit:string = "Belépés"
  public lblReset:string = "Adatok törlése"
  public username:string = "";
  public password:string = "";
  public error:string = "";
  public loggedin: boolean = false;
  constructor() {
    
  }

  ngOnInit(): void {
  this.lblUsername = "Username:";
    this.lblPassword = "Password:";
    this.lblSubmit = "Login";
    this.lblReset = "Reset";
  }
  kattint(){
    this.error = "";
    this.loggedin = false;
    if (this.username == "admin" && this.password == "123") {
      alert("Beléptél: "+this.username)
      this.loggedin = true;
    }
    else{
      this.error = "Hibás felhasználónév vagy jelszó!";

    }
  }
  
  logout(){
    this.loggedin= false;
    this.error = "";
    this.password = "";
  }
  
}

