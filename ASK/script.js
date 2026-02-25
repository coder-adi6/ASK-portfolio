document.addEventListener("DOMContentLoaded", () => {

/* PANEL */
window.openPanel = function(id){
    const panel = document.getElementById("panel");
    const content = document.getElementById("panelContent");

    let p = projects[id];
    let imgs = p.images.map(i=>`<img src="${i}">`).join("");

    content.innerHTML = `
        <h2>${p.title}</h2>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank">View →</a>
        ${imgs}
    `;

    panel.classList.add("active");
}

window.closePanel = function(){
    document.getElementById("panel").classList.remove("active");
}

/* REVEAL */
const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            e.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

/* NAV SCROLL */
const nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

/* BACK TO TOP */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 300){
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.onclick = ()=>{
    window.scrollTo({top:0, behavior:"smooth"});
};

/* TYPING EFFECT */
const texts = [
    "Designing with light and intention.",
    "Exploring space and experience.",
    "Creating meaningful architecture."
];

let i=0, j=0;
const el = document.getElementById("typing-text");

function type(){
    if(j < texts[i].length){
        el.innerHTML += texts[i].charAt(j);
        j++;
        setTimeout(type,50);
    } else {
        setTimeout(erase,1500);
    }
}

function erase(){
    if(j>0){
        el.innerHTML = texts[i].substring(0,j-1);
        j--;
        setTimeout(erase,30);
    } else {
        i = (i+1)%texts.length;
        setTimeout(type,300);
    }
}

type();

/* PAGE LOAD */
window.addEventListener("load", ()=>{
    document.body.classList.add("loaded");
});

/* PARALLAX */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", ()=>{
    if(hero){
        hero.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    }
});

});