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


const projects = document.querySelectorAll('.project')
document.addEventListener('scroll', () => {
    projects.forEach(project => {
        const rect = project.getBoundingClientRect()

        let viewPortBottom = window.innerHeight || document.documentElement.clientHeight

        if(rect.bottom <= viewPortBottom*1.5 && !project.classList.contains('fade-animation')){
            project.classList.add('fade-animation')
        }
    })
        
    
})

