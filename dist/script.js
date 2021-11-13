const navigationLinks = document.getElementById('navigation__links'),
      menu = document.getElementById('menu'),
      slides = document.getElementsByClassName('reviews__information__carousel-item'),
      totalSlides = slides.length;

let menuOpen = false,
    slidePosition = 0;

//  hamburger menu
menu.addEventListener('click', () => {
    navigationLinks.classList.toggle('links-show');
    menu.classList.toggle('menu-show');

    if (!menuOpen) menuOpen = true;
    else menuOpen = false;
})

function menuChanger() {
    if (menuOpen && document.body.clientWidth >= 1007) {
        navigationLinks.classList.toggle('links-show');
        menu.classList.toggle('menu-show')

        menuOpen = false;
    }
}

window.onresize = menuChanger;

// /hamburger menu


// carousel
document.getElementById('previous').addEventListener('click', () => {
    prevSlide();
});

document.getElementById('next').addEventListener('click', () => {
    nextSlide();
})

function updateSlidePosition() {
    for (let slide of slides){
        slide.classList.remove('reviews__information__carousel-item--visible')
        slide.classList.add('reviews__information__carousel-item--hidden')
    }

    slides[slidePosition].classList.add('reviews__information__carousel-item--visible')
}

function prevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}

function nextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}
// /carousel