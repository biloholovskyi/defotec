import 'normalize.css';
import {fullPageNav, fullPageStart, fullPageResize} from "./fullpageNav";

$(document).ready(function() {
  fullPageStart();

  $('.fullPageNav__item, .first__button-down').on('click', (e) => fullPageNav(e));
});

$(window).resize(function () {
  // if($(window).width() < 992) {
  //   fullPageResize();
  // } else {
  //   fullPageStart();
  // }
});