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
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar').outerHeight();

    console.log("navbarHeight",navbarHeight);
    $(window).scroll(function (event) {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta) return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      console.log("st",st);
      console.log("lastScrollTop",lastScrollTop);
      console.log("navbarHeight",navbarHeight);
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.navbar').removeClass('nav-down').addClass('nav-up');
      } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
          $('.navbar').removeClass('nav-up').addClass('nav-down');
        }
      }

      lastScrollTop = st;
    }
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
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
      handler: function (direction) {
        console.log('Scrolled to waypoint!');
      },
    });
  }
}
