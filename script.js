let form = document.querySelector('.contact-us')
let mask = document.querySelector('.form-mask')
let contactUsAudio = document.querySelector('.contact-us-audio')
let submitAudio = document.querySelector('.submit-audio')


function buttonClick() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mask.style.visibility = "visible";
    contactUsAudio.play();
}


function sendForm(){
    form.style.left = "-330px"
    mask.style.visibility = "hidden"
    submitAudio.play()
 }