const sections = $('.fullPage');

const fullPageNav = (e) => {
  sections.css('transform', `translateY(-${+e.target.getAttribute('data-number') - 1}00vh)`);
}

const fullPageStart = () => {
  sections.each((index, section) => {
    console.log(section);
    sections.eq(index).css({
      'top': `${index}00vh`
    });
  })
}

export {fullPageNav, fullPageStart}