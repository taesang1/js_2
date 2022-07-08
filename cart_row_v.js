let tagArea_row = document.querySelectorAll('.xans-order-list');
console.log(tagArea_row)
let box_row = document.createElement('div');
let title_row = document.createElement('p');


box_row.style.width = '100%'
box_row.style.height = '200px'
box_row.style.border = '1px solid black'

title_row.innerHTML = '장바구니상품 추천상품'
title_row.style.textAlign = 'center'
title_row.appendChild(document.createElement('hr'))
box_row.appendChild(title_row)
for (var i = 0; i < tagArea_row.length; i++) {
    tagArea_ = tagArea_row[i].childNodes
    for (var j = 0; j < tagArea_.length; j++) {
        if (tagArea_[j].className != null  && tagArea_[j].className.includes('xans-record-')){
            console.log(tagArea_[j])
            console.log(box_row)
            box_row.setAttribute('class', 'intellisys'+i);
            tagArea_[j].appendChild(box_row);
            console.log(tagArea_[j])
        }
      }
  }
