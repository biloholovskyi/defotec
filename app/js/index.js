import 'normalize.css';
import {fullPageNav, fullPageStart, fullPageResize} from "./fullpageNav";
import './particles';
import {manSliderNext, manSliderClick} from "./manSlider";
import {toggleMobileMenu} from "./mobileMenu";
import {switchModalType, disabledPolitical, closeModalForm, openModalForm} from "./modalForm";
import {play, close} from "./aboutVideo";

$(document).ready(function() {
  fullPageStart();
  particlesJS.load('particle', 'particles.json', function() {});
  particlesJS.load('particle-2', 'particles.json', function() {});

  $('.fullPageNav__item, .first__button-down').on('click', (e) => fullPageNav(e));
  $('.home-man__nav .next').on('click', () => manSliderNext('next'));
  $('.home-man__nav .prev').on('click', manSliderNext);
  $('.home-man__list .item').on('click', (e) => manSliderClick(e));
  $('.header__humb').on('click', toggleMobileMenu);
  $('.modal-desc__text .text-check').on('click', (e) => switchModalType(e));
  $('.political__check').on('click', disabledPolitical);
  $('.modal-body__close').on('click', closeModalForm);
  $('.main-modal-show').on('click', openModalForm);
  $('.about__video').on('click', play);
  $('.about__video-close').on('click', close);
});


$(window).resize(function () {
  // if($(window).width() < 992) {
  //   fullPageResize();
  // } else {
  //   fullPageStart();
  // }
});