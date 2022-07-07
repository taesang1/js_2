let tagArea_prdReview = document.querySelector('#prdReview');
console.log(tagArea)
let box_prdReview = document.createElement('div');
let title_prdReview = document.createElement('p');

box_prdReview.setAttribute('class', 'intellisys');
box_prdReview.style.width = '100%'
box_prdReview.style.height = '200px'
box_prdReview.style.border = '1px solid black'

title_prdReview.innerHTML = '아이템 리뷰 추천상품'
title_prdReview.style.textAlign = 'center'
title_prdReview.appendChild(document.createElement('hr'))

box_prdReview.appendChild(title_prdReview)

tagArea_prdReview.appendChild(box_prdReview);
