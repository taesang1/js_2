function req_code(){
  var xmlHttp = new XMLHttpRequest();	
  xmlHttp.open("GET", "http://127.0.0.1:8000", true);
  xmlHttp.send();
  console.log(xmlHttp.responseText)
}

req_code()
