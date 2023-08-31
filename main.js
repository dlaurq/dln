const nav = document.querySelector(".hero-nav")
const navToggle = document.querySelector(".mobile-nav-toggle")
const navLinks = nav.querySelectorAll('a')

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible')

    if(visibility === 'false'){
        nav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expended', true)
    }else{
        nav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expended', false)
    }

})

navLinks.forEach( link => link.addEventListener('click', () => {
    nav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expended', false)
}))