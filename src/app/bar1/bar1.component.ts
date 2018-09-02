import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar1',
  templateUrl: './bar1.component.html',
  styleUrls: ['./bar1.component.css']
})
export class Bar1Component implements OnInit {

  @Input() barInput: string;

  constructor() { }

  ngOnInit() {
  }

}
