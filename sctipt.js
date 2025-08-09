console.clear();

const prev = document.querySelector(".prev")
const next = document.querySelector(".next")


const slides = document.querySelectorAll(".pag-c")
const buttons = document.querySelectorAll(".circle")

let index = 0;

function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlide()
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide()
}

function updateSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.toggle("active", i == index)
        buttons[i].classList.toggle("cirActive", i == index)
    }
}