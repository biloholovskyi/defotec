const fullPageNav = (e) => {
  const sections = $('.fullPage');
  sections.css('transform', `translateY(-${+e.target.getAttribute('data-number') - 1}00vh)`);
}

export {fullPageNav}