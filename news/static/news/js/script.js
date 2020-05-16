// function parallax(event) {
//     selector = this.querySelector('.bg-image')
//     selector.style.transform = `translate(${event.clientX/50}px, ${event.clientY/50}px) `
// }

function scroll(event) {
    selector = this.querySelector('.bg-image')
    selector.style.transform = `translateY(-${window.pageYOffset/50}px) `
}
// document.addEventListener('mousemove', parallax)
document.addEventListener('scroll', scroll)