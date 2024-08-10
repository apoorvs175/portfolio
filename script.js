// #######################  Toggle Icon Navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* ###################Scroll Section Active Link */

let section = document.querySelectorAll('section');
let navLink  = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
            navLinks.forEach.apply(links => {
            navLink.forEach.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        } );
    };
} );

// ##############Sticky Navbar

let header = document.querySelector('header');
header.classList.toggle('sticky' , window.scrollY > 100);


//############ Remove Toggle Icon and Navbar

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

};


//############ Scroll reval

ScrollReveal({ 
    distance : '80px',
    duration : 2000,
    delay : 200,
});

ScrollReveal().reveal('.home-content, heading' ,{ origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, contact', { origin: 'top' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


//############ Typed JS

 const typed =  new Typed('.multiple-text', {
    strings: ['Frontend Devloper','Web Designer', 'Good Learner'],
    typeSpeed : 70,
    backSpeed : 70,
    backDelay : 1000,
    loop : true,
 })