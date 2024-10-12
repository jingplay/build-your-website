document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.button-menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-tree').classList.toggle('hidden')
    document.querySelector('.nav-mask').classList.toggle('hidden')
  })

  document.querySelector('.nav-mask').addEventListener('click', (evt) => {
    document.querySelector('.nav-tree').classList.add('hidden')
    evt.target.classList.add('hidden')
  })

  const btnExpandAll = document.querySelector('.button-expand-all')
  btnExpandAll && btnExpandAll.addEventListener('click', (evt) => {
    const img = evt.target
    const menus = document.querySelectorAll('.nav-menu.level-1')
    const btns = document.querySelectorAll('.button-expand')
    if (img.classList.contains('expanded')) {
      menus.forEach((menu) => {
        menu.classList.add('hidden')
      })
      btns.forEach((btn) => {
        btn.classList.remove('expanded')
      })
      img.src = '/images/expand-all.svg'
    } else {
      menus.forEach((menu) => {
        menu.classList.remove('hidden')
      })
      btns.forEach((btn) => {
        btn.classList.add('expanded')
      })
      img.src = '/images/collapse-all.svg'
    }
    img.classList.toggle('expanded')
  })

  const btnsExpand = document.querySelectorAll('.button-expand')
  btnsExpand && btnsExpand.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      evt.target.parentElement.nextElementSibling.classList.toggle('hidden')
      evt.target.classList.toggle('expanded')
    })
  })

  document.querySelector('.move-top').addEventListener('click', () => {
    window.scrollTo(0, 0)
  })

  window.addEventListener("scroll", () => {
    const btn = document.querySelector('.move-top')
    if (window.pageYOffset > 500) {
      btn.classList.remove('hidden')
    } else {
      btn.classList.add('hidden')
    }
  })
})