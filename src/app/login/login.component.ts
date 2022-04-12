import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  msg = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(form: any) {
    if (form.username == 'nidhal.benmaad' && form.password == '1234') {
      this.router.navigate(['home', 'list']);
    } else {
      this.msg = 'Bad credentials';
    }
  }
}
