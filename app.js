// Movement Animation to Happen
const card = document.querySelector('.card');
const container = document.querySelector(".container")

// Items
const title = document.querySelector(".title");
const cake = document.querySelector(".cake img");
const contact = document.querySelector(".contact button")
const social = document.querySelector(".social")
const slogan = document.querySelector(".slogan")


// Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = ((window.innerWidth / 2) - e.pageX) / 25;
    let yAxis = ((window.innerHeight / 2) - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", e=> {
    card.style.transition = "none"

    //Popout
    cake.style.transform = 'translateZ(200px) rotateZ(15deg)'
    title.style.transform = 'translateZ(150px)'
    slogan.style.transform = 'translateZ(100px)'
    social.style.transform = 'translateZ(100px)'
    contact.style.transform = 'translateZ(50px)'
})
// Animate Out

container.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.5s ease"
    card.style.transform = `rotateY(0) rotateX(0)`;

    //Popin
    //Popout
    cake.style.transform = 'translateZ(0) rotateZ(0)'
    title.style.transform = 'translateZ(0)'
    slogan.style.transform = 'translateZ(0)'
    social.style.transform = 'translateZ(0)'
    contact.style.transform = 'translateZ(0)'
})