import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // keeping track of optional component attributes that may be used by other components (props in react)
  @Input() text: string = '';
  @Input() color: string = '';

  // emit event if the add button is clicked from another component.
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.btnClick.emit(this.text);
  }
}
