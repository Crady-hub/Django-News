// function parallax(event) {
//     selector = this.querySelector('.bg-image')
//     selector.style.transform = `translate(${event.clientX/50}px, ${event.clientY/50}px) `
// }
// document.addEventListener('mousemove', parallax)
window.onload = check()

function check() {
    if (window.location.search) {
        data = window.location.search.split('=')[1]
        if (data = 'dark') {
            dark_theme()
        }
    }
}

function parallax(event) {
    selector = this.querySelector('.bg-image')
    if (window.pageYOffset / 40 > 196) {
        return
    } else {
        selector.style.transform = `translateY(-${window.pageYOffset/40}px)`
    }
}

document.addEventListener('scroll', parallax)

function dark_theme() {
    if (document.querySelector('.navbar-light')) {
        document.querySelector('.navbar-light').className = 'navbar navbar-expand-lg navbar-dark bg-dark'
        document.querySelectorAll('.news').forEach(block => {
            block.style.backgroundColor = `rgba(52, 58, 64, 0.9)`
            block.style.color = `white`
        });
        document.querySelector('.sidebar').style.backgroundColor = 'rgba(52, 58, 64, 0.9)'
        document.querySelector('.sidebar').style.color = 'white'
        document.querySelector('.bg-image').style.backgroundImage = 'url(/static/news/img/night.jpg)'
    }
}

function bright_theme() {
    if (document.querySelector('.navbar-dark')) {
        document.querySelector('.navbar-dark').className = 'navbar navbar-expand-lg navbar-light bg-light'
        document.querySelectorAll('.news').forEach(block => {
            block.style.backgroundColor = `rgba(255, 255, 255, 0.9)`
            block.style.color = `black`
        });
        document.querySelector('.sidebar').style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
        document.querySelector('.sidebar').style.color = 'black'
        document.querySelector('.bg-image').removeAttribute('style')
    }
}

function goto(element) {
    if (document.querySelector('.navbar-dark')) {
        location.href = `http://127.0.0.1:8000/article/${element.id}?theme=dark`
    } else {
        location.href = `http://127.0.0.1:8000/article/${element.id}`
    }
}

function change_article(element) {
    if (document.querySelector('.navbar-dark')) {
        location.href = `http://127.0.0.1:8000/article/${element.id}?theme=dark`
    } else {
        location.href = `http://127.0.0.1:8000/article/${element.id}`
    }
}

function main_page() {
    if (document.querySelector('.navbar-dark')) {
        location.href = `http://127.0.0.1:8000?theme=dark`
    } else {
        location.href = `http://127.0.0.1:8000`
    }
}