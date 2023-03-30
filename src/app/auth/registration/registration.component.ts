import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  showStudent: boolean = false;
  showCompany: boolean = false;

  show: boolean = false;

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

  ngOnInit(): void {
  }

}
