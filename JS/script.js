const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  window.scrollY > 0 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky')
})

const filterLinks = document.querySelectorAll(".filter-nav-link")

filterLinks.forEach((filterLink) => {
  filterLink.addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelector('.filter-nav-link.active').classList.remove('active')
    filterLink.classList.add('active')

    const projects = document.querySelectorAll('.project')

    projects.forEach((project) => {
      project.classList.add('hide')

      filterLink.getAttribute('data-type') === project.getAttribute('data-type') || filterLink.getAttribute('data-type') === 'all' ? project.classList.remove('hide') : ''
    })
  })

})



