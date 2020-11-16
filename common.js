var myNav = document.querySelector('.main-nav')
window.onscroll = function () {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    myNav.classList.add('main-nav-inv')
  } else {
    myNav.classList.remove('main-nav-inv')
  }
}

let menuClose = document.querySelector('.menu-close')
let navMenu = document.querySelector('.nav-menu')
let fullScrMenu = document.querySelector('.fl-scr-menu')

menuClose.addEventListener('click', () => {
  console.log("noo")
  fullScrMenu.classList.add('none')
})

console.log(menuClose, navMenu, "ahhh")

navMenu.addEventListener('click', () => {
  fullScrMenu.classList.remove('none')
})
