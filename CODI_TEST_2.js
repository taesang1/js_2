import axios from '@nuxtjs/axios'

class INTELLISYS_FRONT_PRODUCT_DETAIL_CODE {
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
    this.code_row = document.createElement("div");
    this.imglist = [{
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
  }

  set_up() {
    this.img = document.createElement("img");
    this.img.style.width = "100%";
    this.img.style.height = "180px";
    this.link = document.createElement("a");
    this.row = document.createElement("li");
    this.row.style.width = '100%'
    this.row.style.listStyle = 'none'
  }

  set_code() {
    for (const i in this.imglist[0]) {
      this.slides = document.createElement("ul");
      this.slides.setAttribute("class", i);
      this.slides.style.display = 'flex'
      for (const j in this.imglist[0][i]){
        this.set_up()
        this.link.setAttribute("href", this.imglist[0][i][j]);
        this.img.style.objectFit = 'contain'
        this.img.setAttribute("src", j);
        this.link.appendChild(this.img);
        this.row.appendChild(this.link);
        this.slides.appendChild(this.row);
      }
      this.code_row.appendChild(this.slides)
      this.code_row.appendChild(document.createElement("hr"))
    }
    this.loading(false)
  }

  set_attrs() {
    this.code_row.setAttribute("class", "code-row");

    this.box.style.width = "100%"
    this.box.style.height = "max-content"
    this.box.style.margin = 'auto'
    this.box.setAttribute("class", "app-taesang-intellisys");

    this.title.innerHTML = "코디상품";
    this.title.style.textAlign = "center";
    this.title.appendChild(document.createElement("hr"));
  }

  set_box() {
    this.info()
    this.set_attrs()
    
    this.box.appendChild(this.title);
    this.loading(true)
    goods_id = get_goods_id()
    ref(CAFE24API.MALL_ID, CAFE24API.SHOP_NO, goods_id)
    this.set_code()
    this.box.appendChild(this.code_row)

    this.tagArea.appendChild(this.box)
  }

  get_goods_id(){
    let metas = document.querySelectorAll("meta");
    let meta = ''
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('property') == 'product:productId'){
        meta = metas[i].getAttribute('content')
      }
    }
    return meta
  }

  loading(status){
    if (status){
      var loading_img = document.createElement("img")
      loading_img.setAttribute("src",'https://t1.daumcdn.net/cfile/tistory/233F6D505786DA870A');
      loading_img.setAttribute("id", 'loading');
      this.box.appendChild(loading_img)
      this.box.style.textAlign='center'
    } else {
      var loading_img = document.querySelector("#loading");
      this.box.removeChild(loading_img)
      this.box.style.textAlign=''
    }
  }
}

var INTELLISYS_FRONT_PRODUCT_DETAIL_CODE_ = new INTELLISYS_FRONT_PRODUCT_DETAIL_CODE(['prdDetail', 'main'])

function ref(mall_id, shop_no, goods_id) {
  axios.get(`http://127.0.0.1:8000/api/main_context_codi/?mall_id=${mall_id}&shop_no=${shop_no}&goods_id=${goods_id}`).then(resp => {
    console.log(resp.data);
    INTELLISYS_FRONT_MAIN_CODE_SET_.set_code(resp.data)
  }).catch((Error)=>{
    console.log(Error);
  });
}
