import 'normalize.css';
import {fullPageNav, fullPageStart} from "./fullpageNav";

$(document).ready(function() {
  fullPageStart();

  $('.fullPageNav__item').on('click', (e) => fullPageNav(e))
});

$(window).resize(function () {

});