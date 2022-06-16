const postIndicator = document.querySelector('.post-scroll-indicator');

function updateScrollHeight() {
    const top = document.body.scrollTop || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const value = (top / max) * 100

    postIndicator.style.height = value + '%'
}

document.addEventListener('scroll', updateScrollHeight)