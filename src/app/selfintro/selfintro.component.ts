import { Component, OnInit } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import * as AOS from 'aos';
@Component({
  selector: 'app-selfintro',
  templateUrl: './selfintro.component.html',
  styleUrls: ['./selfintro.component.css']
})
export class SelfintroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
