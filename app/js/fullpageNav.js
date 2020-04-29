const sections = $('.fullPage');

const fullPageNav = (e) => {
  if($(window).width() > 991) {
    const wrapper = $('.fullPageNav');
    const animBlock = $('.anim-block');
    const animBlockItem = $('.anim-block__item');
    if(wrapper.attr('status') !== 'process') {
      wrapper.attr('status', 'process');
      // включение анимации
      animBlock.css({
        'z-index': '9999'
      });

      setTimeout(() => {
        animBlock.css({
          'opacity': '1'
        });
      }, 100);

      setTimeout(() => {
        animBlockItem.addClass('anim-block__item--show');
      }, 500);

      // переключение блока
      const index = +e.target.getAttribute('data-number') - 1;
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

      // показ блока
      setTimeout(() => {
        animBlock.removeAttr('style');
        animBlockItem.removeClass('anim-block__item--show');
        wrapper.removeAttr('status');
      }, 2000);
    }
  }
}

const fullPageStart = () => {
  sections.eq(0).addClass('fullPage--active').css({
    'z-index': '50',
    'opacity': '1'
  })
}

const fullPageResize = () => {
  sections.css({
    'height' : 'auto',
    'min-height' : 'auto',
    'position' : 'relative',
    'top' : 'auto',
    'left' : 'auto',
    'z-index' : '50',
    'opacity' : '1'
  })
}

export {fullPageNav, fullPageStart, fullPageResize}