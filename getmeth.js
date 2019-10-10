var loadDoc=function (url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        cFunction(this);
      }
    };
    xhttp.open("GET", url, true)
    xhttp.send()
  }
  var  getFunction=function(xhttp) {
      var obj=xhttp.responseText
      var obj1=JSON.parse(obj)
      var str="";
      var i=0;
      obj1.properties.map(x=>{
      str+="<div id='main'><center><img class='pic' src="+x.imageurl+" width='90%'></center></img>";
      str+=discription(obj,i)+"</div>"
      i++;
      })
    document.getElementById("demo").innerHTML=str;
  }
  var discription=function (obj,i){
    var obj1=JSON.parse(obj)
      var str="";
      str=str+"<div id='content'><p>"+obj1.properties[i].shortDiscription+"</p><p>"+obj1.properties[i].price+"<h5>"+obj1.properties[i].promotions+"</h5></p></div>";
    return str;
  }