class INTELLISYS_FRONT_PRODUCT_DETAIL_CODI {
    constructor(target) {
      for (const i in target) {
        this.tagArea = document.querySelector(`#${target[i]}`);
        if (this.tagArea == null) continue;
          var goods_id = this.get_goods_id();
          intellisys_detail_goods_codi_api_request(goods_id)
        break;
      }
    }

    info() {
      this.box = document.createElement("div");
      this.style = document.createElement("style");
      this.slidebox = document.createElement("div")
      this.slidelist = document.createElement("ul")
      this.slide_control = document.createElement('div')
    }
  
    set_up_codi_row() {
      this.codi_img = document.createElement("img");
      this.codi_img.style.width = "100%";
      this.codi_img.style.height = "180px";
      this.codi_link = document.createElement("a");
      this.row = document.createElement("li");
      this.row.style.width = "100%";
      this.row.style.listStyle = "none";
    }
    
    set_codi_attrs(index){
      this.codis.setAttribute("class", "intellisys_codi");
      this.codis.style.display = "flex";
      this.context_title.style.textAlign = "left";
      this.context_title.style.fontSize = "18px";
      this.context_title.style.padding = "10px 0 30px 15px";
      this.context_title.style.fontFamily = "Noto Sans KR, sans-serif";
      this.slideitem.setAttribute("class","app-intellisys-slideitem")
      this.slideitem.style.listStyle="none"
      this.slide.setAttribute("type","radio")
      this.slide.setAttribute("name","slide")
      this.slide.setAttribute("id",`app-intellisys-slide${index+1}`)
      this.slide.style.display = "none"
      if (index == 0){
        this.slide.setAttribute("checked",'')
        this.set_style(`\n#app-intellisys-slide${index+1}:checked ~ .app-intellisys-slidelist .app-intellisys-slideitem {left:0;}`)
      } else{
        this.set_style(`\n#app-intellisys-slide${index+1}:checked ~ .app-intellisys-slidelist .app-intellisys-slideitem {left:${index*-100}%;}`)
      }
    }

    set_codi(res_list) {
      const parts = ["top", "bott", "dress", "outer", "sheos", "bag"];
      for (var res of res_list){
        this.codi_row = document.createElement("div");
        this.codis = document.createElement("ul");
        this.context_title = document.createElement("p");
        this.context_title.innerHTML = res["title"];
        this.slideitem = document.createElement("li")
        this.slide = document.createElement("input")
        this.set_codi_attrs(res_list.indexOf(res))
        this.slidebox.appendChild(this.slide)
      for (const part of parts) {
        this.set_up_codi_row();
        if (res[`${part}_url`] == null || res[`${part}_image_path`] == null)
          continue;
        this.codi_link.setAttribute("href", res[`${part}_url`]);
        this.codi_img.style.objectFit = "contain";
        this.codi_img.setAttribute("src", res[`${part}_image_path`]);
        this.codi_link.appendChild(this.codi_img);
        this.row.appendChild(this.codi_link);
        var item_title = document.createElement("p");
        item_title.style.width = "max-content";
        item_title.style.margin = "auto";
        item_title.style.fontSize = "12px";
        item_title.innerHTML = res[`${part}_title`];
        var item_price = document.createElement("p");
        item_price.style.width = "max-content";
        item_price.style.margin = "auto";
        item_price.style.fontSize = "12px";
        item_price.innerHTML = res[`${part}_price`];
        this.row.appendChild(item_title);
        this.row.appendChild(item_price);
        this.row.style.padding = "0px 15px";
        this.codis.appendChild(this.row);
      }
      this.codi_row.appendChild(this.context_title);
      this.codi_row.appendChild(this.codis);
      this.slideitem.appendChild(this.codi_row)
      this.slidelist.appendChild(this.slideitem)
      }
    }

    set_up_control(index, max_index){
      this.prev = document.createElement('label')
      this.prev.style.innerHTML = '<'
      if (index == 1){
        this.prev.setAttribute("for",`app-intellisys-slide${max_index}`)
      } else{
        this.prev.setAttribute("for",`app-intellisys-slide${index-1}`)
      }
      this.prev.setAttribute("class","app-intellisys-slidebox-prev")

      this.next = document.createElement('label')
      this.next.style.innerHTML = '>'
      if (index == max_index){
        this.next.setAttribute("for",`app-intellisys-slide1`)
      } else {
        this.next.setAttribute("for",`app-intellisys-slide${index+1}`)
      }
      this.next.setAttribute("class","app-intellisys-slidebox-next")

      this.set_style(`\n#app-intellisys-slide${index}:checked ~ .app-intellisys-slide-control .app-intellisys-slidelist-control${index} {display:block;}`)
    }

    set_control(res){
      for (var i =1; i<=res; i++){
        this.control = document.createElement('div')
        this.control.setAttribute('class',`app-intellisys-slidelist-control${i}`)
        this.set_up_control(i, res)
        this.control.appendChild(this.prev)
        this.control.appendChild(this.next)
        this.slide_control.appendChild(this.control)
      }
    }

    set_style(content){
      this.style.innerHTML = this.style.innerHTML+content
    }
    
    set_attrs() {
      this.set_style("@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap');\
      .app-intellisys-slidebox .app-intellisys-slidelist {position:relative;white-space:nowrap;font-size:0;overflow:hidden;}\
      .app-intellisys-slidebox .app-intellisys-slidelist .app-intellisys-slideitem {position:relative;display:inline-block;vertical-align:middle;width:100%;transition:all 1s;}\
      .app-intellisys-slide-control [class*='control'] {display:none;}\
      .app-intellisys-slidebox .app-intellisys-slide-control [class*='control'] label {position:absolute;z-index:10;top:50%;transform:translateY(-50%);padding:20px;border-radius:50%;cursor:pointer;}\
      .app-intellisys-slidebox .app-intellisys-slide-control [class*='control'] label.app-intellisys-slidebox-prev {left:-50px; background:url('https://cdn.intellisys-saas.co.kr/image/prev.png') center center / 50% no-repeat;}\
      .app-intellisys-slidebox .app-intellisys-slide-control [class*='control'] label.app-intellisys-slidebox-next {right:-50px; background:url('https://cdn.intellisys-saas.co.kr/image/next.png') center center / 50% no-repeat;}\n")
      this.box.appendChild(this.style);
  
      this.box.style.width = "100%";
      this.box.style.height = "max-content";
      this.box.style.margin = "auto";
      this.box.style.padding = "40px 0 50px";
      this.box.style.borderTop = "1px solid #ddd";
      this.box.setAttribute("class", "app-intellisys");
      
      this.slidebox.setAttribute("class", "app-intellisys-slidebox");
      this.slidebox.style.position = "relative"
      this.slidelist.setAttribute("class", "app-intellisys-slidelist");
      this.slidelist.style.listStyle="none"
      this.slide_control.setAttribute("class", "app-intellisys-slide-control");
    }
  
    set_box(res) {
      this.info();
      this.set_attrs();
  
      if (res == null || res == 'bleck_list') return
      this.loading(true);
      this.tagArea.appendChild(this.box);
      this.set_codi(res);
      this.slidebox.appendChild(this.slidelist)
      this.slidebox.appendChild(this.slide_control)
      this.box.appendChild(this.slidebox);
      this.set_control(res.length)
      this.loading(false);
    }
  
    get_goods_id() {
      let metas = document.querySelectorAll("meta");
      let meta = "";
      for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute("property") == "product:productId") {
          meta = metas[i].getAttribute("content");
        }
      }
      return meta;
    }
  
    loading(status) {
      if (status) {
        var loading_img = document.createElement("img");
        loading_img.setAttribute(
          "src",
          "https://cdn.intellisys-saas.co.kr/image/loading.gif"
        );
        loading_img.setAttribute("id", "loading");
        loading_img.style.width = "250px";
        loading_img.style.height = "250px";
        this.box.appendChild(loading_img);
        this.box.style.textAlign = "center";
      } else {
        var loading_img = document.querySelector("#loading");
        this.box.removeChild(loading_img);
        this.box.style.textAlign = "";
      }
    }
  }
  
  var INTELLISYS_FRONT_PRODUCT_DETAIL_CODI_ =
    new INTELLISYS_FRONT_PRODUCT_DETAIL_CODI(["test", "prdDetail"]);
  
  function intellisys_detail_goods_codi_api_request(goods_id) {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    // const url = 'https://cafe24-api.intellisys-saas.co.kr/api/detail_goods_codi/?mall_id='+CAFE24API["MALL_ID"]+'&shop_no='+CAFE24API["SHOP_NO"]+'&goods_id='+goods_id
    const url = 'http://127.0.0.1:8000/api/detail_goods_codi/?mall_id=tjagksro&shop_no=1&goods_id=4675'

    xhr.open(method, url);
    xhr.setRequestHeader('x-was-token',btoa('intellis'))
    xhr.onreadystatechange = function (event) {
      const { target } = event;
  
      if (target.readyState === XMLHttpRequest.DONE) {
        const { status } = target;
  
        if (status === 0 || (status >= 200 && status < 400)) {
          INTELLISYS_FRONT_PRODUCT_DETAIL_CODI_.set_box(JSON.parse(xhr.response)['results']);
        } else {
          console.log("Error", xhr.status, xhr.statusText);
        }
      }
    };
    xhr.send();
  }
  
