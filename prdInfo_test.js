let tagArea_prdInfo = document.querySelector('#prdInfo');
console.log(tagArea)
let box = document.createElement('div');
let title = document.createElement('p');

box.setAttribute('class', 'intellisys');
box.style.width = '100%'
box.style.height = '200px'
box.style.border = '1px solid black'

title.innerHTML = 'prdInfo_추천상품'
title.style.textAlign = 'center'
title.appendChild(document.createElement('hr'))

box.appendChild(title)

tagArea_prdInfo.appendChild(box);
