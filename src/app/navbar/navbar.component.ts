import { Component, OnInit } from '@angular/core';
declare const Waypoint: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    function scroll(el: HTMLElement) {
      el.scrollIntoView({behavior:"smooth"})
    }
    var waypoint = new Waypoint({
      element: document.getElementById('about'),
      handler: function(direction) {
        console.log('Scrolled to waypoint!');
      }
    });
  }

}
