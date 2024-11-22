

//---------------------------------------------------------------------------
let btn = document.querySelector(".p1h")
let pric1 = document.querySelector(".pric1")
btn.addEventListener("click" , ()=>{
    console.log("ana hnaa ")
    pric1.classList.remove("d-none")
    pric2.classList.add("d-none")
    pric3.classList.add("d-none")
})
//-------------------------------------------------------------------------
let btn2 = document.querySelector(".p2h")
let pric2 = document.querySelector(".pric2")
btn2.addEventListener("click" , ()=>{
    console.log("ana hnaa ")
    pric2.classList.remove("d-none")
    pric3.classList.add("d-none")
    pric1.classList.add("d-none")
})
//-------------------------------------------------------------------------

let btn3 = document.querySelector(".p3h")
let pric3 = document.querySelector(".pric3")
btn3.addEventListener("click" , ()=>{
    console.log("ana hnaa ")
    pric3.classList.remove("d-none")
    pric2.classList.add("d-none")
    pric1.classList.add("d-none")
})



//-------------------------------------------------------------------------

let elzorr = document.querySelector("#elzorar");
window.onscroll=function(){
    
    if (document.documentElement.scrollTop > 950) {
        elzorr.classList.add("d-block");
        elzorr.classList.remove("d-none");
    } else {
        elzorr.classList.remove("d-block");
        elzorr.classList.add("d-none");
    }

 
}


