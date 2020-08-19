import { Component, OnInit } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
@Component({
  selector: 'app-selfintro',
  templateUrl: './selfintro.component.html',
  styleUrls: ['./selfintro.component.css']
})
export class SelfintroComponent implements OnInit {
  ngOnInit(): void {
    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
}
