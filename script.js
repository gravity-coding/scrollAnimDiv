let lastScroll = 0;
let timeout;
const elementsA = document.querySelectorAll(".box");

window.addEventListener("scroll", function(){
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    clearTimeout(timeout);

    if(scrollTop > lastScroll){
        console.log("scrollDown");
        elementsA.forEach((elem)=>{
            elem.style.scale = "0.8";
        })
    }
    else if(scrollTop < lastScroll){
        console.log("scrollUp")
        elementsA.forEach((elem)=>{
            elem.style.scale = "1.2";
        })
    }
    lastScroll = scrollTop;

    timeout = setTimeout(function(){
        console.clear();
        elementsA.forEach((elem)=>{
            elem.style.scale = "1";
        })
    }, 200)
})