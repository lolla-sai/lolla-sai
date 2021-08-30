let options = {
    threshold: 1
};
let nav = document.querySelector('nav');
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.intersectionRatio == 1 && entry.rootBounds.height > 500) {
            nav.style.backgroundColor = 'white';
            nav.style.boxShadow = 'none';
        }
        else {
            nav.style.backgroundColor = '';
            nav.style.boxShadow = '';
        }
    })
}, options);

observer.observe(document.querySelector('.landing-image'));

let toggleBtn = document.querySelector('.toggleBtn');
let ul = document.querySelector('nav>ul');
let mask = document.querySelector('.mask');
toggleBtn.addEventListener('click', ()=>{
    if(ul.style.display === '') {
        ul.style.display = 'flex';
        mask.style.display = 'block'
    }
    else {
        ul.style.display = '';
        mask.style.display = '';
    }
});

ul.addEventListener('click', () => {
    if(ul.style.display === 'flex') {
        ul.style.display = '';
        mask.style.display = '';
    }
})

// Carousal JS

var leftBtn = document.querySelector('.control-btn.left-btn');
var rightBtn = document.querySelector('.control-btn.right-btn');

function slide(e) {
    let inc = parseInt(e.target.dataset.x);
    if(e.target.tagName === 'SPAN') {
        inc = parseInt(e.target.parentNode.dataset.x);
    }
    let maxSlides = [...document.querySelectorAll('.page')].length;
    
    let currSlide = document.querySelector('.page.active');
    let currSlideIndex = parseInt(currSlide.dataset.index);
    let slideToShowIndex = currSlideIndex+inc;
    // console.log(currSlideIndex, slideToShowIndex, inc);
    if(slideToShowIndex < 1 || slideToShowIndex > maxSlides) {
        return;
    }
    else {
        let slideToShow = [...document.querySelectorAll('.page')].filter(v => v.dataset.index == slideToShowIndex)[0];
        if(inc === 1) {
            let nextToSlideToShow = [...document.querySelectorAll('.page')].filter(v => v.dataset.index == slideToShowIndex+1)[0];
            slideToShow.classList.add('active');
            slideToShow.classList.remove('next');
            currSlide.classList.add('prev');
            currSlide.classList.remove('active');
            if(nextToSlideToShow) {
                nextToSlideToShow.classList.add('next');
            }
        }
        else {
            let prevToSlideToShow = [...document.querySelectorAll('.page')].filter(v => v.dataset.index == slideToShowIndex-1)[0];
            slideToShow.classList.add('active');
            slideToShow.classList.remove('prev');
            currSlide.classList.add('next');
            currSlide.classList.remove('active');
            if(prevToSlideToShow) {
                prevToSlideToShow.classList.add('prev');
            }
        }
    }
}
leftBtn.addEventListener('click', slide);
rightBtn.addEventListener('click', slide);
