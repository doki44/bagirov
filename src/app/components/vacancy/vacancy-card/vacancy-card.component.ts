import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancy-card',
  templateUrl: './vacancy-card.component.html',
  styleUrls: ['./vacancy-card.component.scss']
})
export class VacancyCardComponent implements OnInit {

  constructor() { }

  filter: boolean = false;

  showFilter() {
    this.filter = !this.filter;
  }

  ngOnInit(): void {
  }

}
