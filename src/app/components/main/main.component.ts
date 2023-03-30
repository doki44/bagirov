import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  filter: boolean = false;

  showFilter(){
    this.filter = !this.filter;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
