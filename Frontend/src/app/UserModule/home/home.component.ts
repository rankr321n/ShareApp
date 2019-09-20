import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('[data-toggle=offcanvas]').click(function () {
      $(this).toggleClass('visible-xs text-center');
      $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
      $('.row-offcanvas').toggleClass('active');
      $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
      $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
      $('#btnShow').toggle();
    });
  }

}
