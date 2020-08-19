import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //   $(window).on('resize', function() {
  //     if($(window).width() < 959) {
  //         $('.nav').addClass('flex-row').removeClass('flex-column');
  //     }
  // });
  }

}
