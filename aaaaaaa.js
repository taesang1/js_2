class main {
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
  }

  set_attrs() {
    this.slide_wrapper.setAttribute("class", "slide_wrapper");

    this.box.style.width = "100%"
    this.box.style.height = "max-content"
    this.box.style.margin = 'auto'
    this.box.setAttribute("class", "box");

    this.intellisys_box.setAttribute("class", "intellisys");
    this.intellisys_box.style.display = "flex";

    this.title.innerHTML = "코디상품";
    this.title.style.textAlign = "center";
    this.title.appendChild(document.createElement("hr"));
  }

  set_box() {
    this.info()
    this.set_attrs()

    ref()

    this.box.appendChild(this.title);
    this.box.appendChild(this.slide_wrapper)

    this.tagArea.appendChild(this.box)
  }
}

a = new main(['productList', 'main'])

function ref() {
  const xhr = new XMLHttpRequest();
  const method = "GET";
  const url = "http://127.0.0.1:8000";

  // 요청을 초기화 합니다.
  xhr.open(method, url);

  // onreadystatechange 이벤트를 이용해 요청에 대한 응답 결과를 처리합니다.
  xhr.onreadystatechange = function (event) {
    const { target } = event;

    if (target.readyState === XMLHttpRequest.DONE) {
      const { status } = target;

      if (status === 0 || (status >= 200 && status < 400)) {
        a.set_code(xhr.response)
      } else {
        console.log('Error', xhr.status, xhr.statusText)
      }
    }
  };
  // 서버에 요청을 보냅니다.
  xhr.send();
}
