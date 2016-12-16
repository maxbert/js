var head = document.getElementById("h");
head = head.innerHTML;

var f = function(e) {
    var list = document.getElementById("thelist");
    var l = document.createElement("li");
    l.innerHTML = "new thing!";
    l.addEventListener('mouseover', d(l.innerHTML));
    list.appendChild(l); 
    
};

var bod = document.getElementById("b");
console.log(bod)
bod.addEventListener('click', f);
    
var listy = document.getElementsByTagName("li");
var i = 0;
var d = function(text) {
    var head = document.getElementById("h");
    head.innerHTML = text;
};
for(i; i < listy.length; i++){
    listy[i].addEventListener('mouseover', d(listy[i].innetHTML));
}



