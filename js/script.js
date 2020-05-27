document.addEventListener('DOMContentLoaded', () => {

  const leftMenu = document.querySelector('.left-menu');
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
  });

  document.addEventListener('click', event => {
    const target = event.target;
    if(!target.closest('.left-menu')) {
      leftMenu.classList.remove('openMenu');
      hamburger.classList.remove('open');
    }
  });

  leftMenu.addEventListener('click', event => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');
  
    if(dropdown) {
      dropdown.classList.toggle('active');
      leftMenu.classList.add('openMenu');
      hamburger.classList.add('open');
    }
  });

  const changeImg = event => {
    const target = event.target;
    const currentImg = target.closest('.tv-card__img');

    if(currentImg) {
      let src = currentImg.src;
      currentImg.src = currentImg.dataset.backdrop;
      
      const revertImg = () => {
        currentImg.src = src;
      };

      currentImg.addEventListener('mouseout', revertImg);
    }
  };

  document.addEventListener('mouseover', changeImg);
});