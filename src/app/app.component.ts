import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// import {Observable} from "rxjs/Observable";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aaaLogin';
  message = "Hello world"
  submitted = false
  loading = false
  canGoMain=false

  loginForm = new FormGroup({
    username: new FormControl('aaa'),
    password: new FormControl('aaa'),
    submit: new FormControl('login'),
  });
  constructor(private http: HttpClient) {
  }

  onSubmit() {
    // alert("submit")
    console.log(this.loginForm.value)
    let f:any = this.loginForm.value;
    let _username:string=f.username;
    let _password:string=f.password;
    
    let param1 = [{ username: _username}, {password: _password }]

    let param2 = new HttpParams()
      .set('username', `${_username}`)
      .set('password', `${_password}`);

    this.http.post("", param2 ).subscribe(
      res => {console.log(res)},
      err => {
        let url=err.message;
        let n=url.indexOf("main");
        if(n>0) this.canGoMain=true;
        if(n<0) { alert("Loginerror")}
        // alert(err)
        console.log(err)
      },
      () => { alert("finish") }
    )
  }
}
