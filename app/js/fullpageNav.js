const sections = $('.fullPage');

const fullPageNav = (e) => {
  const index = +e.target.getAttribute('data-number') - 1;
  console.log(index);
  $('.fullPageNav__item').removeClass('fullPageNav__item--active');
  $('.fullPage--active').css({
    'opacity': '0'
  });
  $('.fullPage').eq(index).css({
    'opacity': '1',
    'z-index': '50'
  });
  setTimeout(() => {
    $('.fullPage--active').css('z-index', '-1').removeClass('fullPage--active');
    $('.fullPage').eq(index).addClass('fullPage--active');
  }, 900);
  e.target.classList.add('fullPageNav__item--active');
}

const fullPageStart = () => {
  sections.eq(0).addClass('fullPage--active').css({
    'z-index': '50',
    'opacity': '1'
  })
}

export {fullPageNav, fullPageStart}