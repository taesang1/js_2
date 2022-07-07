let tagArea_item_list = document.querySelector('.xans-product-listnormal');
console.log(tagArea)
let box_item_list = document.createElement('div');
let title_item_list = document.createElement('p');

box_item_list.setAttribute('class', 'intellisys');
box_item_list.style.width = '100%'
box_item_list.style.height = '200px'
box_item_list.style.border = '1px solid black'

title_item_list.innerHTML = 'xans-order-basketpackage_추천상품'
title_item_list.style.textAlign = 'center'
title_item_list.appendChild(document.createElement('hr'))

box_item_list.appendChild(title_item_list)

tagArea_item_list.appendChild(box_item_list);
