
const body = document.querySelector('body'),
    html = document.querySelector('html'),
    menu = document.querySelectorAll('._burger, .header__nav, body'),
    burger = document.querySelector('._burger'),
    header = document.querySelector('.header');



let thisTarget;
body.addEventListener('click', function (event) {

    thisTarget = event.target;

    // Меню в шапке
    if (thisTarget.closest('._burger')) {
        menu.forEach(elem => {
            elem.classList.toggle('_active')
        })
    }



    let btnToScroll = thisTarget.closest('._btn-to-scroll');
    if(btnToScroll) {
      event.preventDefault();
      let section;
    
      section = document.querySelector(btnToScroll.getAttribute('href'))
    
      menu.forEach(elem => {
        elem.classList.remove('_active')
      })
    
      window.scroll({
        left: 0,
        top: (section) ? section.offsetTop - header.offsetHeight : 0,
        behavior: 'smooth'
      })
    
    }


})



// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

wow = new WOW({
mobile:       false,
})
wow.init();

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=


function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
  top: box.top + pageYOffset,
  left: box.left + pageXOffset
  };

}

function scrollPage() {

const offsetCheckJs = document.querySelector('.offset-check-js');
let top = [getCoords(offsetCheckJs).top, false];

header.classList.add('_loaded');

function scrollPageFunc() {
top[0] = getCoords(offsetCheckJs).top;

if(top[0] >= 300 && top[1] == false) {

    top[1] = true;
    header.style.setProperty('opacity', '0');

    setTimeout(function() {
        header.classList.add('_active');
        header.style.setProperty('opacity', '1');
    },200);

} else if(top[0] <= 300 && top[1] == true) {

    top[1] = false;
    header.style.setProperty('opacity', '0');

    setTimeout(function() {
      header.style.setProperty('opacity', '1');
        header.classList.remove('_active');
        
    },200);

}
}

scrollPageFunc();

window.onscroll = scrollPageFunc;

}

scrollPage();



