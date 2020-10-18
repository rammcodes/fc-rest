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
