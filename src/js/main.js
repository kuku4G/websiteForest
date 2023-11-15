const footerYear = document.querySelector('.year');
const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav-mobile__item');
const navBarsColor = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');

const handleNav = () => {
    nav.classList.toggle('nav-mobile--active')

    navBarsColor.classList.add('black-bars-color')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-mobile--active')
        })
    })

    handleNavAnimation();
}

const handleNavAnimation = () => {
    let delayTime = 1;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {

        if(section.classList.contains('white-section') && section.offsetTop <= currentSection) {
            navBarsColor.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection){
            navBarsColor.classList.remove('black-bars-color')
        }
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerHTML = year;
}

navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver)
handleCurrentYear();