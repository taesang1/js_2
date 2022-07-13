function get_user_id(){
  let user = sessionStorage.getItem('member_1')
  if (user == null){
    user = sessionStorage.getItem('AppCommon_1')
    const j = JSON.parse(user)
    user = {member_id: j.data.guest_id, name: 'guest'};
  } else {
    const j = JSON.parse(user)
    user = {member_id: j.data.member_id, name: j.data.name};
  }
  return user
}

function get_item_id(){
  let metas = document.querySelectorAll("meta");
  let meta = ''
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('property') == 'product:productId'){
      meta = metas[i].getAttribute('content')
    }
  }
  return meta
}

function get_cart_items(){
  let item_list = aBasketProductData
  let itme_id_list = []
  if (item_list.length == 0){
    return '장바구니가 비었습니다.'
  } else {
    for (let i = 0; i < item_list.length; i++) {
      itme_id_list.push(item_list[i].product_no)
    }
    return itme_id_list
  }
}

function get_wishList(){
  return JSON.parse(sessionStorage.getItem('localWishList1')).wishList
}

user = get_user_id()
itme_id_list = get_cart_items()
console.log(`mall_id: ${CAFE24API.MALL_ID}, uesr_id: ${user.member_id}, user_name: ${user.name}, cart_item_list: ${itme_id_list}, wishList: ${get_wishList()} `)
