let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let button = document.getElementById('bution');
button.addEventListener('click',check);

function check(){
if(text1.value === "キャピシニーア"){
location.href = "soccer2.html" 
}
if(text1.value === "佐藤雅彦"){
check2();
}else{
alert("違います");
document.textt.reset();
}
}
function check2(){
if(text2.value === "3833"){
check3();
}else{
alert("違います");
document.textt.reset();
}
}
function check3(){
if(text3.value === "高梨"){
location.href ="soccer2.html"
}else{
alert("違います");
document.textt.reset();
}
};
