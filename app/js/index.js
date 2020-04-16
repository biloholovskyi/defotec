import 'normalize.css';
import {fullPageNav} from "./fullpageNav";

$(document).ready(function(){
  $('.fullPageNav__item').on('click', (e) => fullPageNav(e))
});

$(window).resize(function () {

});