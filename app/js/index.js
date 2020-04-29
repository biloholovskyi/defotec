import 'normalize.css';
import {fullPageNav, fullPageStart, fullPageResize} from "./fullpageNav";
import './particles';

$(document).ready(function() {
  fullPageStart();
  particlesJS.load('about__particle', 'particles.json', function() {});

  $('.fullPageNav__item, .first__button-down').on('click', (e) => fullPageNav(e));
});

$(window).resize(function () {
  // if($(window).width() < 992) {
  //   fullPageResize();
  // } else {
  //   fullPageStart();
  // }
});