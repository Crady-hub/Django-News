// function parallax(event) {
//     selector = this.querySelector('.bg-image')
//     selector.style.transform = `translate(${event.clientX/50}px, ${event.clientY/50}px) `
// }
// document.addEventListener('mousemove', parallax)


function parallax(event) {
    selector = this.querySelector('.bg-image')
    if (window.pageYOffset / 40 > 196) {
        return
    } else {
        selector.style.transform = `translateY(-${window.pageYOffset/40}px)`
    }
}

document.addEventListener('scroll', parallax)

dark.onclick = function() {
    if (document.querySelector('.navbar-light')) {
        document.querySelector('.navbar-light').className = 'navbar navbar-expand-lg navbar-dark bg-dark'
        document.querySelectorAll('.news').forEach(block => {
            block.style.backgroundColor = `rgba(52, 58, 64, 0.8)`
            block.style.color = `white`
        });
        document.querySelector('.bg-image').style.backgroundImage = 'url(/static/news/img/night.jpg)'
    }
}

bright.onclick = function() {
    if (document.querySelector('.navbar-dark')) {
        document.querySelector('.navbar-dark').className = 'navbar navbar-expand-lg navbar-light bg-light'
        document.querySelectorAll('.news').forEach(block => {
            block.style.backgroundColor = `rgba(255, 255, 255, 0.8)`
            block.style.color = `black`
        });
        document.querySelector('.bg-image').removeAttribute('style')
    }
}

function goto(element) {
    location.href = `article/${element.id}`
}