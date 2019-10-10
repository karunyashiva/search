var datas={
    "searchHistory":[],
    "maxsearch":''
}
var searched=function(){
   var x=document.getElementById("searchItem").value;
   datas.searchHistory.length<5? x!=" "?datas.searchHistory.push(x):alert("enter any value to search"):sorting()
}
   var sorting=function(){
    var current=null, count=0,max=0,maxvalue=null;
   datas.searchHistory.map(x=>{
        if(x!=current){
            if (count > 0) {
               if(max<count){
                   max=count;
                   maxvalue=current;
               }
            }
        current = x;
        count = 1;
        }
        else {
            count++;
        }
       
    }
    
) 
if(count>0){
    if(max<count){
        max=count;
        maxvalue=current;
    }
}

datas.maxsearch=maxvalue;
//  minsearch(max)
 console.log(max)
 console.log(datas)
 }

