// function parallax(event) {
//     selector = this.querySelector('.bg-image')
//     selector.style.transform = `translate(${event.clientX/50}px, ${event.clientY/50}px) `
// }

function scroll(event) {
    selector = this.querySelector('.bg-image')
    if (window.pageYOffset / 40 > 196) {
        return
    } else {
        selector.style.transform = `translateY(-${window.pageYOffset/40}px)`
    }
}

// document.addEventListener('mousemove', parallax)
document.addEventListener('scroll', scroll)