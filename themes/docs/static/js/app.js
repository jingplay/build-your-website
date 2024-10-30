document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.button-menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-tree').classList.toggle('hidden')
    document.querySelector('.nav-mask').classList.toggle('hidden')
  })

  document.querySelector('.nav-mask').addEventListener('click', (evt) => {
    document.querySelector('.nav-tree').classList.add('hidden')
    evt.target.classList.add('hidden')
  })

  const btnsExpandAll = document.querySelectorAll('.btn-expand-all')
  btnsExpandAll && btnsExpandAll.forEach((btnExpandAll) => {
    btnExpandAll.addEventListener('click', () => {
    const menus = document.querySelectorAll('.nav-menu.level-1')
    const btns = document.querySelectorAll('.button-expand')
      const btnEx = document.querySelector('.btn-expand-all.expand')
      if (btnEx.classList.contains('hidden')) {
      menus.forEach((menu) => {
        menu.classList.add('hidden')
      })
      btns.forEach((btn) => {
        btn.classList.remove('expanded')
      })
    } else {
      menus.forEach((menu) => {
        menu.classList.remove('hidden')
      })
      btns.forEach((btn) => {
        btn.classList.add('expanded')
      })
    }
      btnsExpandAll.forEach((btn) => {
        btn.classList.toggle('hidden')
      })
    })
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