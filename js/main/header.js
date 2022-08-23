const mainHeader = document.querySelector('.main-header');
const headerMobile = document.querySelector('.header-mobile');
const headerDesk = document.querySelector('.header-desk');

// aqui detectamos a altura do header para entrar acrescentarmos um padding no main
if (window.matchMedia("(min-width: 991px)").matches) {
    mainHeader.style.paddingTop = headerDesk.clientHeight + 'px' 
  } else {
    mainHeader.style.paddingTop = headerMobile.clientHeight + 'px'
}

// evento que detecta o scroll do usuario
if (window.matchMedia("(min-width: 991px)").matches) {
    var lastScrollTop = 0;
    window.addEventListener("scroll", function() { 
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop){
            headerDesk.classList.add('nav-down');
            headerDesk.classList.remove('nav-up')
    } else {
            headerDesk.classList.add('nav-up');
            headerDesk.classList.remove('nav-down')
    }
    lastScrollTop = st;
    }, false);
} else {
    var lastScrollTop = 0;
    window.addEventListener("scroll", function() { 
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop){
            headerMobile.classList.add('nav-down');
            headerMobile.classList.remove('nav-up')
    } else {
            headerMobile.classList.add('nav-up');
            headerMobile.classList.remove('nav-down')
    }
    lastScrollTop = st;
    }, false);
}

const navMobile = document.querySelector('.first-bar .nav-mobile')
const menuMobile = document.querySelector('.menu-mobile');
const closeMenuMobile = menuMobile.querySelector('.close-menu-mobile');
if(navMobile && menuMobile) {
    navMobile.addEventListener('click', () => {
    menuMobile.classList.add('active');
  });
  closeMenuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('active');
  });
}