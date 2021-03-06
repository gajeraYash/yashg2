import { Component, OnInit } from '@angular/core';
declare const Waypoint: any;
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if ($('.navbar').length > 0) { // check if element exists
      var last_scroll_top = 0;
      var delta = 0;

      $(window).on('scroll', function() {
          var scroll_top = $(this).scrollTop();
          var heightTopID = document.getElementById('selfinfo').getBoundingClientRect().height;
          console.log("Client Height",heightTopID);
          if(scroll_top <= 5){
            $('.navbar').removeClass("nav-init");
          }else if(scroll_top > 5 && scroll_top < (heightTopID * 0.25)){
            $('.navbar').addClass('nav-init');
          }else if (scroll_top < last_scroll_top){
            $('.navbar').removeClass('nav-down').addClass([ "nav-up", "nav-init"]);
          }else{
            $('.navbar').removeClass([ "nav-up", "nav-init"]).addClass("nav-down");
          }
          last_scroll_top = scroll_top;
      });
  }


    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('a[href^="#nav"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') ==
            this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate(
              {
                scrollTop: target.offset().top,
              },
              1000
            );
          }
        }
      });
    var waypoint = new Waypoint({
      element: document.getElementById('about'),
      handler: function (scroll) {
        console.log('Scrolled to waypoint!');
      },
    });
  }
}
