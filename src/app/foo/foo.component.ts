import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  @Output() newValueGEnerated = new EventEmitter<string>();

  constructor() { }
  name = "";

  ngOnInit() {
  }


  dosmth() {
    this.name = "Ahmed " + Math.floor((Math.random() * 10) + 1);
    console.log('xaxa', 'FOO: in dosmth', this.name);
    this.newValueGEnerated.emit(this.name);
  }  
}
