const scrollEl = document.documentElement
const root = document.documentElement

let scrollPos


function animation() {

  if (scrollPos !== scrollEl.scrollTop) {
    scrollPos = scrollEl.scrollTop
    root.style.setProperty('--scrollPos', scrollPos + 'px')
  }

  window.requestAnimationFrame(animation)
}

window.requestAnimationFrame(animation)

export default parallax