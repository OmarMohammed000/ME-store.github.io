let span=document.querySelector("#toTop")

window.onscroll=function(){
    
    if(this.scrollY >= 1000){
    span.classList.add("vis");
    }
    else{
    span.classList.remove("vis")
    }
}
span.onclick= function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}