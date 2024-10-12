'use strict'

window.searchApp = {
  source: '',
  messages: {},
  field: document.getElementById('search-field'),
  output: document.getElementById('search-output'),
  data: {},
  index: {},
  ready: false
}

document.addEventListener('DOMContentLoaded', () => {
  searchApp.output.innerText = searchApp.messages['loading']

  axios
    .get(searchApp.source)
    .then(rsp => {
      searchApp.data = rsp.data
      searchApp.index = lunr(function () {
        this.ref('href')
        this.field('title', { boost: 3 })
        this.field('summary')

        rsp.data.results.forEach((article) => {
          this.add(article);
        })
      })
      searchApp.output.innerText = searchApp.messages['ready']
      searchApp.ready = true
    })

  searchApp.field.addEventListener('input', () => {
    if (!searchApp.ready) {
    }

    const keywords = searchApp.field.value
      .split(" ")
      .filter(word => (word.length >= 2))

    if (keywords.length <= 0) {
      searchApp.output.innerText = searchApp.messages['invalid-input']
      return
    }

    const txt = keywords.map(word => ('+*' + word + '*')).join(' ')
    const results = searchApp.index.search(txt);
    let articles = []

    results.map((item) => {
      searchApp.data.results.filter(article => {
        if (item.ref == article.href) {
          articles.push(article)
        }
      })
    })

    displaySearchResults(articles, keywords)
  })

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  function displaySearchResults(articles, keywords) {
    searchApp.output.innerText = ((articles.length > 0) ? '' : searchApp.messages['nothing-found'])

    const patterns = keywords.map(keyword => new RegExp('(' + escapeRegex(keyword) + ')', "ig"))

    articles.forEach((article) => {
      let title = article.title
      patterns.forEach(pattern => {
        title = title.replace(pattern, '<span style="color:red">$1</span>')
      })

      let summary = article.summary
      patterns.forEach(pattern => {
        summary = summary.replace(pattern, '<span style="color:red">$1</span>')
      })

      const a = document.createElement('a')
      a.href = article.href
      a.target = '_blank'
      a.innerHTML = title

      const h3 = document.createElement('h3')
      h3.appendChild(a)

      const p = document.createElement('p')
      p.innerHTML = summary

      const sect = document.createElement('section')
      sect.classList.add('mt-8')

      sect.appendChild(h3)
      sect.appendChild(p)

      searchApp.output.appendChild(sect)
    })
  }
})