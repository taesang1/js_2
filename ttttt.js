function init_(){
  let tagArea = document.querySelector("#prdDetail");
  let title = document.createElement("p");
  let intellisys_box = document.createElement("div");
  let box = document.createElement("div");
  let slide_wrapper = document.createElement("div");
  let imglist = [{
    'code_set_1':{
      "http://tjagksro.cafe24.com/web/product/medium/202207/35f9a9996ae4959b3e0c497c766ac0df.png":
      "http://tjagksro.cafe24.com/product/%EC%98%A4%ED%94%84%EC%88%84%EB%8D%94/2373/category/25/display/1/",
      "http://tjagksro.cafe24.com/web/product/medium/202207/2d045833256fe226b708837ef1e4b230.png":
      "http://tjagksro.cafe24.com/product/%EB%B0%B0%EC%83%89-%EB%82%98%EC%8B%9C/2367/category/25/display/1/",
      "http://tjagksro.cafe24.com/web/product/medium/202207/a39fda918b3244cdf49826cfec1a31b6.png":
      "http://tjagksro.cafe24.com/product/%ED%84%B0%ED%8B%80%EB%84%A5-%EB%8B%88%ED%8A%B8/2361/category/25/display/1/",
      "http://tjagksro.cafe24.com/web/product/medium/202207/f8f6a71003e8d3de1728f2803597a89d.png":
      "http://tjagksro.cafe24.com/product/%EC%B9%B4%ED%82%A4-%ED%9B%84%EB%93%9C/2345/category/25/display/1/",
    },
    'code_set_2': {
      "http://tjagksro.cafe24.com/web/product/medium/202207/35f9a9996ae4959b3e0c497c766ac0df.png":
      "http://tjagksro.cafe24.com/product/%EC%98%A4%ED%94%84%EC%88%84%EB%8D%94/2373/category/25/display/1/",
      "http://tjagksro.cafe24.com/web/product/medium/202207/4726c6b2de07001fb98b67cd9f95cec9.png":
      "http://tjagksro.cafe24.com/product/%EB%B9%A8%EA%B0%84-%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4/2342/category/25/display/1/",
      "http://tjagksro.cafe24.com/web/product/medium/202207/a1a7063658bfb071163fed1b9909d997.png":
      "http://tjagksro.cafe24.com/product/%EB%B0%B0%EC%83%89-%ED%9B%84%EB%93%9C%ED%8B%B0/2344/category/25/display/1/",
    },
    'code_set_3': {
      "http://tjagksro.cafe24.com/web/product/medium/202207/35f9a9996ae4959b3e0c497c766ac0df.png":
      "http://tjagksro.cafe24.com/product/%EC%98%A4%ED%94%84%EC%88%84%EB%8D%94/2373/category/25/display/1/",
      "http://tjagksro.cafe24.com/web/product/medium/202207/af4d9956e1e37f3631e29ef0702e67b4.png":
      "http://tjagksro.cafe24.com/product/%ED%9D%B0%ED%8B%B0/2337/category/25/display/1/",
    }
  }]
  //     "http://tjagksro.cafe24.com/web/product/medium/202207/706626798cc1afd7e3f3a824870a8bd0.png":
  //       "http://tjagksro.cafe24.com/product/%EC%85%94%EC%B8%A0/2334/category/25/display/1/",
  return {
    tagArea : tagArea,
    title : title,
    box : box,
    intellisys_box : intellisys_box,
    slide_wrapper : slide_wrapper,
    imglist : imglist
  }
}

function set_up(text) {
  let slides = document.createElement("ul");
  slides.setAttribute("class", text);
  slides.style.display = 'flex'
  let hr = document.createElement("hr")
  let img = document.createElement("img");
  img.style.width = "100%";
  img.style.height = "180px";
  let link = document.createElement("a");
  let row = document.createElement("li");
  row.style.width = '100%'
  row.style.listStyle = 'none'
  return {
    img : img,
    link : link,
    row : row,
    slides : slides,
    hr : hr,
  };
}
function set_css(){
  let css = document.createElement("style")
  css.innerHTML = set_style();
  return css
}
init = init_()
tagArea = init.tagArea
title = init.title
box = init.box
intellisys_box = init.intellisys_box
slide_wrapper = init.slide_wrapper
imglist = init.imglist

slide_wrapper.setAttribute("class", "slide_wrapper");

box.style.width = "100%"
box.style.height = "max-content"
box.style.margin = 'auto'
box.setAttribute("class", "box");

intellisys_box.setAttribute("class", "intellisys");
intellisys_box.style.display= "flex";
title.innerHTML = "상품";
title.style.textAlign = "center";
title.appendChild(document.createElement("hr"));

for (const i in imglist[0]) {
  set = set_up(i)
  slides = set.slides
  hr = set.hr
  for (const j in imglist[0][i]){
    set = set_up()
    row = set.row;
    link = set.link;
    img = set.img;
    link.setAttribute("href", imglist[0][i][j]);
    img.style.objectFit = 'contain'
    img.setAttribute("src", j);
    link.appendChild(img);
    row.appendChild(link);
    slides.appendChild(row);
  }
  slide_wrapper.appendChild(slides)
  slide_wrapper.appendChild(hr)
}

box.appendChild(title);
box.appendChild(slide_wrapper)
// intellisys_box.appendChild()
tagArea.appendChild(box)
