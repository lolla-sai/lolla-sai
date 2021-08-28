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
