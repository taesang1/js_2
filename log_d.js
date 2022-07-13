function get_user_id(){
  let user = sessionStorage.getItem('member_1')
  if (user == null){
    user = sessionStorage.getItem('AppCommon_1')
    const j = JSON.parse(user)
    user = {member_id: j.data.guest_id, name: 'guest'};
  } else {
    const j = JSON.parse(user)
    console.log(j)
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
user = get_user_id()
item_id = get_item_id()
console.log(`mall_id: ${CAFE24API['MALL_ID']}, uesr_id: ${user.member_id}, user_name: ${user.name}, item_id: ${item_id}`)
