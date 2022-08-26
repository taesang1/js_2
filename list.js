import axios from '@nuxtjs/axios'

class INTELLISYS_FRONT_MAIN_CODE_SET {
  constructor(target) {
    for (const i in target) {
      this.tagArea = document.querySelector(`#${target[i]}`);
      if (this.tagArea == null) continue
      this.set_box()
    }
  }

  info() {
    this.title = document.createElement("p");
    this.box = document.createElement("div");
    this.slide_wrapper = document.createElement("div");
  }

  set_up() {
    this.img = document.createElement("img");
    this.img.style.width = "100%";
    this.img.style.height = "180px";
    this.link = document.createElement("a");
    this.row = document.createElement("li");
    this.row.style.width = '100%'
    this.row.style.listStyle = 'none'
    this.code_title = document.createElement("p");
    this.code_title.style.textAlign='left';
    this.code_title.style.position='absolute'
  }

  set_up2(text){
    this.slides = document.createElement("ul");
    this.slides.setAttribute("class", text);
    this.slides.style.display = 'flex'
    this.hr = document.createElement("hr")
  }

  set_code(res) {
    res = JSON.parse(res)
    for (const i in res) {
      this.set_up2(i)
      for (const j in res[i]){
        this.set_up()
        if (j.includes('title')){
          this.code_title.innerHTML = res[i][j]
          this.slide_wrapper.appendChild(this.code_title);
        }
        if (res[i][j]['imgurl'] === 0 || res[i][j]['imgurl'] == null) continue
        this.link.setAttribute("href", res[i][j]['link']);
        this.img.style.objectFit = 'contain'
        this.img.setAttribute("src", res[i][j]['imgurl']);
        this.link.appendChild(this.img);
        this.row.appendChild(this.link);
        this.slides.appendChild(this.row);
      }
      this.slide_wrapper.appendChild(this.slides)
      this.slide_wrapper.appendChild(this.hr)
    }
    this.loading(false)
  }

  set_attrs() {
    this.box.style.width = "100%"
    this.box.style.height = "max-content"
    this.box.style.margin = 'auto'
    this.box.setAttribute("id", "app-taesang-intellisys");

    this.title.innerHTML = "코디상품";
    this.title.style.textAlign = "center";
    this.title.appendChild(document.createElement("hr"));
  }

  set_box() {
    this.info()
    this.set_attrs()
    
    this.box.appendChild(this.title);
    this.loading(true)
    ref()
    this.box.appendChild(this.slide_wrapper)

    this.tagArea.appendChild(this.box)
  }

  loading(status){
    if (status){
      var loading_img = document.createElement("img")
      loading_img.setAttribute("src",'https://t1.daumcdn.net/cfile/tistory/233F6D505786DA870A');
      loading_img.setAttribute("id", 'app-taesang-intellisys-loading');
      this.box.appendChild(loading_img)
      this.box.style.textAlign='center'
    } else {
      var loading_img = document.querySelector("#app-taesang-intellisys-loading");
      this.box.removeChild(loading_img)
      this.box.style.textAlign=''
    }
  }
}

var INTELLISYS_FRONT_MAIN_CODE_SET_ = new INTELLISYS_FRONT_MAIN_CODE_SET(['productList', 'main'])

function ref() {
  axios.get('http://127.0.0.1:8000').then(resp => {
    console.log(resp.data);
    INTELLISYS_FRONT_MAIN_CODE_SET_.set_code(resp.data)
  }).catch((Error)=>{
    console.log(Error);
  });
}
