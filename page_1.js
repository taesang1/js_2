let tagArea_page = document.querySelector('.xans-product-normalpaging');
console.log(tagArea_page)
let box_page = document.createElement('div');
let title_page = document.createElement('p');

box_page.setAttribute('class', 'intellisys');
box_page.style.width = '100%'
box_page.style.height = '200px'
box_page.style.border = '1px solid black'
box_page.style.margin = 'auto'

title_page.innerHTML = '아이템 리스트 페이지네이션 추천상품'
title_page.style.textAlign = 'center'
title_page.appendChild(document.createElement('hr'))

box_page.appendChild(title_page)

tagArea_page.after(box_page);
