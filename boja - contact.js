
let elzorr = document.querySelector("#elzorar");
window.onscroll=function(){
    
    if (document.documentElement.scrollTop > 550) {
        elzorr.classList.add("d-block");
        elzorr.classList.remove("d-none");
    } else {
        elzorr.classList.remove("d-block");
        elzorr.classList.add("d-none");
    }


}


