function init_(){
  let tagArea = document.querySelector(".xans-product-listnormal");
  let title = document.createElement("p");
  let intellisys_box = document.createElement("div");
  let box = document.createElement("div");
  let slide_wrapper = document.createElement("div");
  let slides = document.createElement("ul");
  let imglist = [
    {
      "http://tjagksro.cafe24.com/web/product/medium/202207/35f9a9996ae4959b3e0c497c766ac0df.png":
        "http://tjagksro.cafe24.com/product/%EC%98%A4%ED%94%84%EC%88%84%EB%8D%94/2373/category/25/display/1/",
    },
    {
      "http://tjagksro.cafe24.com/web/product/medium/202207/2d045833256fe226b708837ef1e4b230.png":
        "http://tjagksro.cafe24.com/product/%EB%B0%B0%EC%83%89-%EB%82%98%EC%8B%9C/2367/category/25/display/1/",
    },
    {
      "http://tjagksro.cafe24.com/web/product/medium/202207/a39fda918b3244cdf49826cfec1a31b6.png":
        "http://tjagksro.cafe24.com/product/%ED%84%B0%ED%8B%80%EB%84%A5-%EB%8B%88%ED%8A%B8/2361/category/25/display/1/",
    },
    {
      "http://tjagksro.cafe24.com/web/product/medium/202207/f8f6a71003e8d3de1728f2803597a89d.png":
        "http://tjagksro.cafe24.com/product/%EC%B9%B4%ED%82%A4-%ED%9B%84%EB%93%9C/2345/category/25/display/1/",
    },
    {
      "http://tjagksro.cafe24.com/web/product/medium/202207/a1a7063658bfb071163fed1b9909d997.png":
        "http://tjagksro.cafe24.com/product/%EB%B0%B0%EC%83%89-%ED%9B%84%EB%93%9C%ED%8B%B0/2344/category/25/display/1/",
    },
    {
      "http://tjagksro.cafe24.com/web/product/medium/202207/4726c6b2de07001fb98b67cd9f95cec9.png":
        "http://tjagksro.cafe24.com/product/%EB%B9%A8%EA%B0%84-%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4/2342/category/25/display/1/",
    },
    {
      "http://tjagksro.cafe24.com/web/product/medium/202207/af4d9956e1e37f3631e29ef0702e67b4.png":
        "http://tjagksro.cafe24.com/product/%ED%9D%B0%ED%8B%B0/2337/category/25/display/1/",
    },
    {
      "http://tjagksro.cafe24.com/web/product/medium/202207/706626798cc1afd7e3f3a824870a8bd0.png":
        "http://tjagksro.cafe24.com/product/%EC%85%94%EC%B8%A0/2334/category/25/display/1/",
    },
  ];
  return {
    tagArea : tagArea,
    title : title,
    box : box,
    intellisys_box : intellisys_box,
    slide_wrapper : slide_wrapper,
    slides : slides,
    imglist : imglist
  }
}

function set_up() {
  let img = document.createElement("img");
  img.style.width = "100%";
  img.style.height = "100px";
  let link = document.createElement("a");
  let row = document.createElement("li");
  return {
    img : img,
    link : link,
    row : row,
  };
}

function set_page(box){
  // let controls = document.createElement("p");
  let prev = document.createElement("span");
  let next = document.createElement("span");
  prev.setAttribute("class", "prev");
  prev.style.fontSize = '40px'
  prev.innerHTML = "&lt;";
  next.setAttribute("class", "next");
  next.innerHTML = "&gt;";
  next.style.fontSize = '40px'
  // controls.setAttribute("class", "controls");
  intellisys_box.append(prev,box, next)
  return intellisys_box
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
slides = init.slides
imglist = init.imglist

slide_wrapper.setAttribute("class", "slide_wrapper");
slides.setAttribute("class", "slides");

box.style.width = "100%"
box.style.height = "100%"
box.style.margin = 'auto'
box.setAttribute("class", "box");

intellisys_box.setAttribute("class", "intellisys");
intellisys_box.style.display= "flex";
title.innerHTML = "추천상품";
title.style.textAlign = "center";
title.appendChild(document.createElement("hr"));

for (let i = 0; i < imglist.length; i++) {
  set = set_up()
  link = set.link;
  img = set.img;
  row = set.row;
  link.setAttribute("href", Object.values(imglist[i]));
  img.setAttribute("src", Object.keys(imglist[i]));
  link.appendChild(img);
  row.appendChild(link);
  slides.appendChild(row);
}

slide_wrapper.appendChild(slides)

box.appendChild(title);
box.appendChild(slide_wrapper)

// intellisys_box.appendChild()
tagArea.appendChild(set_page(box))

var slides_ = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = Math.ceil(slide_wrapper.offsetWidth/4 - document.querySelector('.prev').offsetWidth/(imglist.length*3) *2)

makeClone();

function makeClone(){
  for( var i = 0; i<slideCount; i++){
    var cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides_.appendChild(cloneSlide)
  }
  for (var i = slideCount-1; i>=0; i--){
    var cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides_.prepend(cloneSlide)
  }
  updateWidth();
  setInitialPos();
  setTimeout(function(){
    slides_.classList.add('animated');
  },100);
  
}

function updateWidth(){
  var currentSlides = document.querySelectorAll('.slides li')
  var newSlideCount = currentSlides.length
  console.log(document.querySelector('.prev').offsetWidth/24 *2)
  var newWidth = slideWidth*newSlideCount + 'px';
  slides_.style.width = newWidth
}

function setInitialPos(){
  var initialTranslateValue = -slideWidth*slideCount;
  slides_.style.transform = 'translateX('+initialTranslateValue+'px)';
}

nextBtn.addEventListener('click',function(){
  moveslide(currentIdx +1);
})

prevBtn.addEventListener('click',function(){
  moveslide(currentIdx -1);
})

function moveslide(num){
 slides_.style.left = -num * slideWidth+'px';
 currentIdx = num;
 if (currentIdx == slideCount || currentIdx == -slideCount){
  setTimeout(function(){
    slides_.classList.remove('animated');
    slides_.style.left = '0px';
    currentIdx = 0;
  },500);
  setTimeout(function(){
    slides_.classList.add('animated');
  },600);
 }
}

function set_style() {
  var width = Math.floor(slide_wrapper.offsetWidth/4) - document.querySelector('.prev').offsetWidth/(imglist.length*3)*2
  console.log(width, slideWidth)
  return "\
  *{margin:0; padding: 0;}\
  li{list-style:none;}\
  .intellisys{height: 200px; border: 1px solid black; margin: 0 auto;}\
  .slide_wrapper{position: relative; width: 100%; height: 80%; overflow: hidden; margin: 0 auto;}\
  .slides{position: absolute; left: 0; top: 0; padding-left: 0;}\
  .slides.animated{transition: 0.5s ease-out;}\
  .prev {margin: auto;}\
  .next {margin: auto;}\
  .slides li{width:"+slideWidth+"px; height: 100px; float: left;}"
}

box.prepend(set_css())
