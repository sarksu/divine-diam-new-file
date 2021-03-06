import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor(private routeCtrl:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.routeCtrl.navigate(['/register']);
  }
}
