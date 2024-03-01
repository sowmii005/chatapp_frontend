import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
name:string='';
password:string='';
messages: Message[]=[];
  constructor(private route:Router) { }

  ngOnInit() {
   
    console.log('-');
  }
  onlogin()
  {
  if(this.name==='sowmya' && this.password==='abc!123'){
   
    this.messages = [{ severity: 'success', summary: 'Success', detail: 'Login Successful' }];
    this.route.navigate(['/tabs']);
  }
  else{
    console.log('login failure');
    this.messages = [{ severity: 'error',detail: 'Incorrect login' }];
  }
  }
}
