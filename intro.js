var head = document.getElementById("h");
var d = function(text) {
    head.innerHTML= this.innerHTML;
};
var q = function(e){
    head.innerHTML = "Hello World!";
};
var count = 1;
var count2 =0;
var f = function(e) {
    var list = document.getElementById("thelist");
    var l = document.createElement("li");
    l.innerHTML = "new thing!";
    l.addEventListener('mouseover', d);
    l.addEventListener('mouseout', q);
    l.addEventListener('click', rm);
    list.appendChild(l); 
    
};

var rm = function(e){
    this.parentNode.removeChild(this);
};

	
var bod = document.getElementById("b");
console.log(bod)
bod.addEventListener('click', f);
    
var listy = document.getElementsByTagName("li");
var i = 0;
var head = document.getElementById("h");

for(i; i < listy.length; i++){
    listy[i].addEventListener('mouseover', d);
    listy[i].addEventListener('mouseout', q);
    listy[i].addEventListener('click', rm);

};
var list2 = document.getElementById("oil");
var b2 = document.getElementById("fib");


var fibber = function(e){
    var li =document.createElement("li");
    li.innerHTML=count;
    var count3 = count
    count = count + count2;
    count2 = count3;
    oil.appendChild(li);
};


b2.addEventListener('click', fibber);
