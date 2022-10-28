class INTELLISYS_FRONT_MAIN_CODI_SET {
    constructor(target) {
      for (const i in target) {
        this.tagArea = document.querySelector(`#${target[i]}`);
        if (this.tagArea == null) continue;
        this.set_box();
        break
      }
    }
  
    info() {
      this.title = document.createElement("p");
      this.box = document.createElement("div");
      this.codi_row = document.createElement("div");
      this.fontstyle = document.createElement("style");
    }
  
    set_up() {
      this.img = document.createElement("img");
      this.img.style.width = "100%";
      this.img.style.height = "180px";
      this.link = document.createElement("a");
      this.row = document.createElement("li");
      this.row.style.width = "100%";
      this.row.style.listStyle = "none";
    }
  
    set_codi(res) {
      const parts = ["top", "bott", "dress", "outer", "sheos", "bag"];
      this.slides = document.createElement("ul");
      this.slides.setAttribute("class", "intellisys_codi");
      this.slides.style.display = "flex";
      for (const part of parts) {
        this.set_up();
        if (res[`${part}_url`] == null || res[`${part}_image_path`] == null)
          continue;
        this.title.innerHTML = res['title'];
        this.title.style.fontSize = '18px'
        this.title.style.padding = '10px 0 30px 15px'
        this.title.style.fontFamily = 'Noto Sans KR, sans-serif'
        this.link.setAttribute("href", res[`${part}_url`]);
        this.img.style.objectFit = "contain";
        this.img.setAttribute("src", res[`${part}_image_path`]);
        this.link.appendChild(this.img);
        this.row.appendChild(this.link);
        var title = document.createElement("p");
        title.style.width = 'max-content'
        title.style.margin = 'auto'
        title.style.fontSize = '12px'
        title.innerHTML = res[`${part}_title`]
        var price = document.createElement("p");
        price.style.width = 'max-content'
        price.style.margin = 'auto'
        price.style.fontSize = '12px'
        price.innerHTML = res[`${part}_price`]
        this.row.appendChild(title);
        this.row.appendChild(price);
        this.row.style.padding = '0px 15px'
        this.slides.appendChild(this.row);
      }
      this.codi_row.appendChild(this.slides);
      this.loading(false);
    }
  
    set_attrs() {
      this.fontstyle.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap');"
  
      this.box.appendChild(this.fontstyle)
      this.codi_row.setAttribute("class", "codi-row");
  
      this.box.style.width = "100%";
      this.box.style.height = "max-content";
      this.box.style.margin = "auto";
      this.box.style.padding = "40px 0 50px";
      this.box.style.borderTop = "1px solid #ddd"
      this.box.setAttribute("class", "app-taesang-intellisys");
  
      this.title.style.textAlign = "left";
    }
  
    set_box() {
      this.info();
      this.set_attrs();
  
      this.loading(true);
      intellisys_main_context_codi_api_request();
      this.box.appendChild(this.title);
      this.box.appendChild(this.codi_row);
  
      this.tagArea.appendChild(this.box);
    }
  
    loading(status) {
      if (status) {
        var loading_img = document.createElement("img");
        loading_img.setAttribute(
          "src",
          "https://t1.daumcdn.net/cfile/tistory/233F6D505786DA870A"
        );
        loading_img.setAttribute("id", "loading");
        this.box.appendChild(loading_img);
        this.box.style.textAlign = "center";
      } else {
        var loading_img = document.querySelector("#loading");
        this.box.removeChild(loading_img);
        this.box.style.textAlign = "";
      }
    }
  }
  
  var INTELLISYS_FRONT_MAIN_CODI_SET_ = new INTELLISYS_FRONT_MAIN_CODI_SET([
    "test",
    "main",
  ]);
  
  function intellisys_main_context_codi_api_request() {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const url = 'https://cafe24-api.intellisys-saas.co.kr/api/main_context_codi/?mall_id='+CAFE24API["MALL_ID"]+'&shop_no='+CAFE24API["SHOP_NO"]
    xhr.open(method, url);
    xhr.setRequestHeader('x-was-token',btoa('intellisys'))
    xhr.onreadystatechange = function (event) {
      const { target } = event;
  
      if (target.readyState === XMLHttpRequest.DONE) {
        const { status } = target;
  
        if (status === 0 || (status >= 200 && status < 400)) {
          INTELLISYS_FRONT_MAIN_CODI_SET_.set_codi(JSON.parse(xhr.response)['results']);
        } else {
          console.log("Error", xhr.status, xhr.statusText);
        }
      }
    };
    xhr.send();
  
  }
