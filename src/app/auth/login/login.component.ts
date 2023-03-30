import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  showStudent: boolean = false;
  showCompany: boolean = false;
  show: boolean = false;

  form: FormGroup; 

  constructor(private auth: AuthService) { }

  showFormStud() {
    this.showStudent = !this.showStudent;
    this.showCompany = false;
  }
  showFormComp() {
    this.showStudent = false;
    this.showCompany = !this.showCompany;
  }
  password() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    this.auth.login(this.form.value).subscribe(
      () => console.log('Login Success'),
      error => {
        console.warn(error);
      }
    )
  }

}
