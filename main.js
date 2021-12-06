const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navElems = document.querySelectorAll('.nav');


openBtn.addEventListener('click', ()=> {
    navElems.forEach(nav => {
        nav.classList.add('visible');
    })
})


closeBtn.addEventListener('click', ()=> {
    navElems.forEach(nav => {
        nav.classList.remove('visible');
    })
})
