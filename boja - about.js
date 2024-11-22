
//-------------------------------------------------------------------------
let elikat = document.querySelector(".elikat")
let elaward = document.querySelector(".elaward")
let elclient = document.querySelector(".elclient")
let elyears = document.querySelector(".elyears")
let elzorr = document.querySelector("#elzorar");
window.onscroll=function(){
    console.log(document.documentElement.scrollTop)
    
    if (document.documentElement.scrollTop > 500) {
        elzorr.classList.add("d-block");
        elzorr.classList.remove("d-none");
    } else {
        elzorr.classList.remove("d-block");
        elzorr.classList.add("d-none");
    }

    if(document.documentElement.scrollTop>1700 &&document.documentElement.scrollTop<2900 ){
//-----------------------------------------------------------------------------
if(elikat.innerText == 0){
elikat.innerText=0 
var i =0 
var intrl = setInterval(()=>{
i=i+1
if(i>=2000) {clearInterval(intrl) }
elikat.innerText=i } , 1)
}
//-----------------------------------------------------------------------------
if(elaward.innerText == 0){
elaward.innerText=0 
var x =0 
var intrl2 = setInterval(()=>{
x=x+1
if(x>=800) { x=810 
    clearInterval(intrl2) }
elaward.innerText=x } , 8)
}
//-----------------------------------------------------------------------------
if(elclient.innerText == 0){
elclient.innerText=0 
var v =0 
var intrl3 = setInterval(()=>{
v=v+1
if(v>=2000) {clearInterval(intrl3) }
elclient.innerText=v } , 1)
}
//-----------------------------------------------------------------------------
if(elyears.innerText == 0){
elyears.innerText=0 
var s =0 
var intrl4 = setInterval(()=>{
s++
if(s>=20) {
    clearInterval(intrl4) }
    elyears.innerText=s } , 350)
}
//-----------------------------------------------------------------------------
    }
    else{
        elikat.innerText=0 
        elaward.innerText=0 
        elclient.innerText=0 
        elyears.innerText=0 
    }
    
}


