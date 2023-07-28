import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  constructor() {}

  ngOnInit(): void {}

  // keeping track of new tasks that are added on the page from child button component.
  toggleAddTask(): void {
    console.log('toggle');
  }
}
