let ul = document.querySelector('ul')

data.books.forEach((book) => {
  let li = document.createElement('li')
  li.className = 'list'
  let img = document.createElement('img')
  img.classList.add('image')
  img.src = book.image
  img.alt = book.title
  let title = document.createElement('h2')
  title.setAttribute('class', 'title')
  title.innerText = book.title
  let author = document.createElement('p')
  author.classList.add('authorName')
  author.innerText = 'Author : '
  let span = document.createElement('span')
  span.innerText = book.author
  let button = document.createElement('button')
  button.className = 'btn'
  button.innerText = 'Buy now'
  author.append(span)
  li.append(img, title, author, button)
  ul.append(li)
  console.log(li)
})
