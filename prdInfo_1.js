let tagArea_prdInfo = document.querySelector('#prdInfo');
console.log(tagArea)
let box_prdInfo = document.createElement('div');
let title_prdInfo = document.createElement('p');

box_prdInfo.setAttribute('class', 'intellisys');
box_prdInfo.style.width = '100%'
box_prdInfo.style.height = '200px'
box_prdInfo.style.border = '1px solid black'

title_prdInfo.innerHTML = '아이템 설명 추천상품'
title_prdInfo.style.textAlign = 'center'
title_prdInfo.appendChild(document.createElement('hr'))

box_prdInfo.appendChild(title_prdInfo)

tagArea_prdInfo.appendChild(box_prdInfo);
