console.log('lode')
let tagArea = document.querySelector('#main');
console.log(tagArea)
let box = document.createElement('div');
let title = document.createElement('p');
let img_grid = document.createElement('ui')

box.setAttribute('class', 'intellisys');
box.style.width = '100%'
box.style.height = '300px'

title.innerHTML = '추천상품'
title.style.textAlign = 'center'
title.appendChild(document.createElement('hr'))

img_grid.style.display ='flex'
img_grid.style.width = '100%'
img_grid.style.height = '90%'
for (var i = 0; i < 5; i++) {
    imgs = document.createElement('li')
    imgs.style.listStyle = 'none'
    a = document.createElement('a')
    img = document.createElement('img')
    img.setAttribute('src','images/icon/ico-company03.png')
    a.appendChild(img)
    imgs.appendChild(a)
    img_grid.appendChild(imgs)
}

box.appendChild(title)
box.appendChild(img_grid)

tagArea.appendChild(box);