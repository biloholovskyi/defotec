const sections = $('.fullPage');

const fullPageNav = (e, status = false,) => {
  if($(window).width() > 991) {
    const wrapper = $('.fullPageNav');
    const animBlock = $('.anim-block');
    const animBlockItem = $('.anim-block__item');
    if(wrapper.attr('status') !== 'process') {
      wrapper.attr('status', 'process');
      // включение анимации
      $('#prelouder').css({
        'opacity': '1',
        'z-index': '999999999'
      });
      setTimeout(() => {
        $('#prelouder').css({
          'opacity': '0'
        });
      }, 800)

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
      const index = status ? 0 : +e.target.getAttribute('data-number') - 1;
      const numberStatus = status ? false : e.target.getAttribute('data-anim'); // для прокрутки номера
      $('.fullPageNav__item').removeClass('fullPageNav__item--active');
      $('.fullPage--active').css({
        'opacity': '0'
      });
      setTimeout(() => {
        $('.fullPage--active').css('z-index', '-1').removeClass('fullPage--active');
        $('.fullPage').eq(index).addClass('fullPage--active');
      }, 900);
      if(status) {
        $('.fullPageNav__item').eq(0).addClass('fullPageNav__item--active')
      } else {
        e.target.classList.add('fullPageNav__item--active');
      }

      // показ блока
      setTimeout(() => {
        animBlock.removeAttr('style');
        animBlockItem.removeClass('anim-block__item--show');
        wrapper.removeAttr('status');
        $('#prelouder').css({
          'z-index': '-1'
        });

        if(numberStatus) {
          numberRoll();
        }
        $('.fullPage').eq(index).css({
          'opacity': '1',
          'z-index': '50'
        });
      }, 2000);
    }
  } else {
    setTimeout(() => {
      $('#prelouder').css({
        'opacity': '0'
      })
    }, 1000);
    setTimeout(() => {
      $('#prelouder').css({
        'z-index': '-1'
      })
    }, 2000)
  }
}

const fullPageStart = (e) => {
  sections.eq(0).addClass('fullPage--active').css({
    'z-index': '50',
    'opacity': '1'
  });
  fullPageNav(e, true);
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

const numberRoll = () => {
  $('.anim-number').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    })
  })
}

export {fullPageNav, fullPageStart, fullPageResize}