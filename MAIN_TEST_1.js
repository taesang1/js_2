!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e){var i=new class{constructor(t){for(const e in t)this.tagArea=document.querySelector("#"+t[e]),null!=this.tagArea&&this.set_box()}info(){this.title=document.createElement("p"),this.box=document.createElement("div"),this.code_row=document.createElement("div")}set_up(){this.img=document.createElement("img"),this.img.style.width="100%",this.img.style.height="180px",this.link=document.createElement("a"),this.row=document.createElement("li"),this.row.style.width="100%",this.row.style.listStyle="none"}set_code(t){const e=["top","bott","dress","outer",["sheos"]];this.slides=document.createElement("ul"),this.slides.setAttribute("class","intellisys_codi"),this.slides.style.display="flex";for(const i of e)this.set_up(),null!=t[i+"_url"]&&null!=t[i+"_image_path"]&&(this.link.setAttribute("href",t[i+"_url"]),this.img.style.objectFit="contain",this.img.setAttribute("src",t[i+"_image_path"]),this.link.appendChild(this.img),this.row.appendChild(this.link),this.slides.appendChild(this.row));this.code_row.appendChild(this.slides),this.code_row.appendChild(document.createElement("hr")),this.loading(!1)}set_attrs(){this.code_row.setAttribute("class","code-row"),this.box.style.width="100%",this.box.style.height="max-content",this.box.style.margin="auto",this.box.setAttribute("class","app-taesang-intellisys"),this.title.innerHTML="코디상품",this.title.style.textAlign="center",this.title.appendChild(document.createElement("hr"))}set_box(){this.info(),this.set_attrs(),this.box.appendChild(this.title),this.loading(!0),function(){const t=new XMLHttpRequest;t.open("GET","http://127.0.0.1:8000/api/main_context_codi/?mall_id=tjagksro&shop_no=1"),t.onreadystatechange=function(e){const{target:s}=e;if(s.readyState===XMLHttpRequest.DONE){const{status:e}=s;0===e||e>=200&&e<400?(console.log(JSON.parse(t.response).results),i.set_code(JSON.parse(t.response).results)):console.log("Error",t.status,t.statusText)}},t.send()}(),this.box.appendChild(this.code_row),this.tagArea.appendChild(this.box)}loading(t){if(t){var e=document.createElement("img");console.log("생성"),e.setAttribute("src","https://t1.daumcdn.net/cfile/tistory/233F6D505786DA870A"),e.setAttribute("id","loading"),this.box.appendChild(e),this.box.style.textAlign="center"}else{e=document.querySelector("#loading");this.box.removeChild(e),this.box.style.textAlign=""}}}(["productList","main"])}]);