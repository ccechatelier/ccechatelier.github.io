/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'), 
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
      tabsContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabsContents.forEach(tabsContent =>{
            tabsContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        
        tab.classList.add('qualification__active')
    })
})

/*==================== Publications MODAL ====================*/

const modalViews = document.querySelectorAll('.publications__modal'),
      modalBtns = document.querySelectorAll('.publications__button'),
      modalCloses = document.querySelectorAll('.publications__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal') 
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== Conferences MODAL ====================*/

const modalcViews = document.querySelectorAll('.conferences__modal'),
      modalcBtns = document.querySelectorAll('.conferences__button'),
      modalcCloses = document.querySelectorAll('.conferences__modal-close')

let modalc = function(modalcClick){
    modalcViews[modalcClick].classList.add('active-modalc') 
}

modalcBtns.forEach((modalcBtn, i) => {
    modalcBtn.addEventListener('click', () => {
        modalc(i)
    })
})

modalcCloses.forEach((modalcClose) =>{
    modalcClose.addEventListener('click', () =>{
        modalcViews.forEach((modalcView) =>{
            modalcView.classList.remove('active-modalc')
        })
    })
})

/*==================== Projects MODAL ====================*/

const modalpViews = document.querySelectorAll('.projects__modal'),
      modalpBtns = document.querySelectorAll('.projects__button'),
      modalpCloses = document.querySelectorAll('.projects__modal-close')

let modalp = function(modalpClick){
    modalpViews[modalpClick].classList.add('active-modalp') 
}

modalpBtns.forEach((modalpBtn, i) => {
    modalpBtn.addEventListener('click', () => {
        modalp(i)
    })
})

modalpCloses.forEach((modalpClose) =>{
    modalpClose.addEventListener('click', () =>{
        modalpViews.forEach((modalpView) =>{
            modalpView.classList.remove('active-modalp')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 