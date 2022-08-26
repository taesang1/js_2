class INTELLISYS_FRONT_PRODUCT_DETAIL_SIMILAR {
  constructor(target) {
    for (const i in target) {
      this.tagArea = document.querySelector(`#${target[i]}`);
      if (this.tagArea == null) continue
      this.set_box()
    }
  }

  info() {
    this.title = document.createElement("p");
    this.intellisys_box = document.createElement("div");
    this.box = document.createElement("div");
    this.slide_wrapper = document.createElement("div");
    this.slides = document.createElement("ul");
    this.imglist = [
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
  }

  set_page(){
    // let controls = document.createElement("p");
    let prev = document.createElement("span");
    let next = document.createElement("span");
    prev.setAttribute("class", "app-taesang-intellisys-prev-similar");
    prev.style.fontSize = '40px'
    prev.innerHTML = "&lt;";
    next.setAttribute("class", "app-taesang-intellisys-next-similar");
    next.innerHTML = "&gt;";
    next.style.fontSize = '40px'
    this.intellisys_box.append(prev,this.box, next)
    return this.intellisys_box
  }

  set_style() {
    let css = document.createElement("style")
    css.innerHTML = "*{margin:0; padding: 0;}\
    .app-taesang-intellisys-row{list-style:none;}\
    #app-taesang-intellisys .similar_box .slide_wrapper_similar{position: relative; width: 100%; height: 80%; overflow: hidden; margin: 0 auto;}\
    .app-taesang-intellisys-slides-similar{position: absolute; left: 0; top: 0; padding-left: 0;}\
    .app-taesang-intellisys-slides-similar.animated{transition: 0.5s ease-out;}\
    .app-taesang-intellisys-prev-similar {margin: auto;}\
    .app-taesang-intellisys-next-similar {margin: auto;}\
    .app-taesang-intellisys-slides-similar li{width:"+slideWidth+"px; height: 100px; float: left;}"
    return css
  }

  set_up() {
    this.img = document.createElement("img");
    this.img.style.width = "100%";
    this.img.style.height = "100px";
    this.link = document.createElement("a");
    this.row = document.createElement("li");
  }

  set_code() {
    for (let i = 0; i < this.imglist.length; i++) {
      this.set_up()
      this.link.setAttribute("href", Object.values(this.imglist[i]));
      this.img.setAttribute("src", Object.keys(this.imglist[i]));
      this.link.appendChild(this.img);
      this.row.setAttribute("class", "app-taesang-intellisys-row");
      this.row.appendChild(this.link);
      this.slides.appendChild(this.row);
    }
    // this.loading(false)
  }

  set_attrs() {
    this.slide_wrapper.setAttribute("class", "slide_wrapper_similar");
    this.slides.setAttribute("class", "app-taesang-intellisys-slides-similar");

    this.box.style.width = "100%"
    this.box.style.height = "100%"
    this.box.style.margin = 'auto'
    this.box.setAttribute("class", "similar_box");

    this.intellisys_box.setAttribute("id", "app-taesang-intellisys");
    this.intellisys_box.style.display = "flex";
    this.intellisys_box.style.height = '200px';
    this.intellisys_box.style.border = '1px solid black'
    this.intellisys_box.style.margin = '0 auto'

    this.title.innerHTML = "유사상품";
    this.title.style.textAlign = "center";
    this.title.appendChild(document.createElement("hr"));
  }

  set_box() {
    this.info()
    this.set_attrs()
    
    this.set_code()
    this.slide_wrapper.appendChild(this.slides)
    this.box.appendChild(this.title);
    // this.loading(true)
    // ref()

    this.box.appendChild(this.slide_wrapper)
    this.tagArea.appendChild(this.set_page())
  }

  // loading(status){
  //   if (status){
  //     var loading_img = document.createElement("img")
  //     loading_img.setAttribute("src",'https://t1.daumcdn.net/cfile/tistory/233F6D505786DA870A');
  //     loading_img.setAttribute("id", 'loading');
  //     this.box.appendChild(loading_img)
  //     this.box.style.textAlign='center'
  //   } else {
  //     var loading_img = document.querySelector("#loading");
  //     this.box.removeChild(loading_img)
  //     this.box.style.textAlign=''
  //   }
  // }
}

var INTELLISYS_FRONT_PRODUCT_DETAIL_SIMILAR_ = new INTELLISYS_FRONT_PRODUCT_DETAIL_SIMILAR(['prdDetail', 'main'])

// function ref() {
//   const xhr = new XMLHttpRequest();
//   const method = "GET";
//   const url = "http://127.0.0.1:8000";

//   // 요청을 초기화 합니다.
//   xhr.open(method, url);

//   // onreadystatechange 이벤트를 이용해 요청에 대한 응답 결과를 처리합니다.
//   xhr.onreadystatechange = function (event) {
//     const { target } = event;

//     if (target.readyState === XMLHttpRequest.DONE) {
//       const { status } = target;

//       if (status === 0 || (status >= 200 && status < 400)) {
//         similar.set_code(xhr.response)
//       } else {
//         console.log('Error', xhr.status, xhr.statusText)
//       }
//     }
//   };
//   // 서버에 요청을 보냅니다.
//   xhr.send();
// }

var slides_ = document.querySelector('.app-taesang-intellisys-slides-similar'),
    slide = document.querySelectorAll('.app-taesang-intellisys-slides-similar li'),
    prevBtn = document.querySelector('.app-taesang-intellisys-prev-similar'),
    nextBtn = document.querySelector('.app-taesang-intellisys-next-similar'),
    slide_wrapper = document.querySelector('.slide_wrapper_similar'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = Math.ceil(slide_wrapper.offsetWidth/4 - document.querySelector('.app-taesang-intellisys-prev-similar').offsetWidth/(INTELLISYS_FRONT_PRODUCT_DETAIL_SIMILAR_.imglist.length*3) *2)

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
  var currentSlides = document.querySelectorAll('.app-taesang-intellisys-slides-similar li')
  var newSlideCount = currentSlides.length
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

INTELLISYS_FRONT_PRODUCT_DETAIL_SIMILAR_.box.prepend(INTELLISYS_FRONT_PRODUCT_DETAIL_SIMILAR_.set_style())
