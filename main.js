// open menu
let menuToggle = document.getElementById('menu_open');
const overlay = document.querySelector('.nav-primary');
const closeMenu = document.getElementById('menu_close');

menuToggle.addEventListener('click', () => {
    overlay.style.transform = "translateY(0)";
    menuToggle.style.display = 'none';
    closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    overlay.style.transform = "translateY(-110%)";
    menuToggle.style.display = 'block';
    closeMenu.style.display = 'none';
})



// let overlay = document.querySelector('.nav-primary');

// let open = document.querySelector('#menu_open');
// open.innerHTML = 'Open Menu';

// open.addEventListener('click', () => {
//     overlay.style.transform = "translateY(0)";
//     open.innerHTML = 'Close Menu';    
//     open.style.color = 'white'; 

//     console.log(open.innerHTML);

// });

// console.log(open.innerHTML);

// if(open.innerHTML == 'Close Menu'){
//     console.log("here");
//     // overlay.style.transform = "translateY(-110%)";
// }    


// if(menu.innerHTML == 'Close Menu') {
//     console.log("menu open");
//     overlay.style.transform = "translateY(-110%)";
//     menu.innerHTML = 'Open Menu';
//     menu.style.color = 'black';        
// }

    // open.addEventListener('click', () => {
    //     overlay.style.transform = "translateY(-110%)";
    //     menu.innerHTML = 'Open Menu';
    //     menu.style.color = 'black';
    // });



// let close = document.getElementById('menu_open');
// close.innerHTML = 'Close Menu';

// close.addEventListener('click', () => {
//     overlay.style.transform = "translateY(-110%)";
//     close.innerHTML = 'Open Menu'
//     close.style.color = 'black';
// });

// if(clickEvent = 'Close Menu'){
//     overlay.style.transform = "translateY(-110%)";
// }

// let close = document.getElementById('menu_open');

// open.addEventListener('click', () => {
//     overlay.style.transform = "translateY(-110%)";
// });


/*
function myFunction(x){
    
    const element = document.querySelector('body');

    const computedStyle = window.getComputedStyle(element);
    let value = computedStyle.getPropertyValue('background-color');

    console.log(value);

    if(value == "rgb(255, 255, 255)"){
        console.log("here");
        value = 'rgb(0, 0, 0)';
        console.log(value);
    } else {
        value = 'rgb(255, 255, 255)';  
    }     
}
*/


// function toggleMobileMenu(menu){
    
//     console.log(menu.classList);

//     menu.classList.toggle('open');
    
//     console.log(menu.classList);
//     console.log("here");
// }








// animation on scroll
// function animationOnScroll() {
//     const element = document.querySelector('.intro_heading');
//     const keyframes = `
//         @keyframes animateUp {
//             0% {
//                 opacity: 0;
//                 transform: translateY(150px);
//             }
//             100% {
//                 opacity: 1;
//                 transform: translateY(0px);
//             }
//         }
//     `;
    
//     const style = document.createElement('style');
//     style.innerHTML = keyframes;
//     document.head.appendChild(style);
    
//     element.classList.add('animateUp');
// }

// window.addEventListener('scroll', animationOnScroll);



// scroll function
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);

        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
