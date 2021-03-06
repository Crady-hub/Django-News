// Тёмная тема при загрузке
window.onload = check()

function check() {
    if (window.location.search) {
        data = window.location.search.split('=')[1]
        if (data = 'dark') {
            dark_theme()
        }
    }
}

// Паралакс
function parallax(event) {
    selector = this.querySelector('.bg-image')
    if (window.pageYOffset / 40 > 196) {
        return
    } else {
        selector.style.transform = `translateY(-${window.pageYOffset/40}px)`
    }
}

document.addEventListener('scroll', parallax)

// Тёмная тема
function dark_theme() {
    if (document.querySelector('.navbar-light')) {
        document.querySelector('.navbar-light').className = 'navbar navbar-expand-lg navbar-dark bg-dark'
        document.querySelectorAll('.news').forEach(block => {
            block.style.backgroundColor = `rgba(52, 58, 64, 0.9)`
            block.style.color = `rgba(245, 245, 245, 1)`
        });
        document.querySelector('.sidebar').style.backgroundColor = 'rgba(52, 58, 64, 0.9)'
        document.querySelector('.sidebar').style.color = 'rgba(245, 245, 245, 1)'
        document.querySelector('.bg-image').style.backgroundImage = 'url(/static/news/img/night.jpg)'
    }
}

// Светлая тема
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

// Переходы по ссылкам с тёмной темой
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