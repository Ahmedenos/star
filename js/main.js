let head = document.getElementById('head')
window.onscroll = function () {
    if (scrollY > 50 && scrollY < 300) {
        head.style.transform = 'translateY(-100px)'
    }
    else {
        head.style.transform = 'translateY(0px)';
        head.style.position = 'fixed';
        head.style.transitionDuration = '.7s';
        head.style.zIndex = '100'
    }
}


let dropDown=document.getElementsByClassName("dropdown-menu")
let link=document.getElementsByClassName("nav-item")
let drop=dropDown
let links=link

for(let i=0 ;i<drop.length ;i++){
    links[i].onmouseover=()=>{
        drop[i].classList.add("drop-toggle")
    }
}
for(let i=0 ;i<drop.length ;i++){
    links[i].onmouseout=()=>{
        drop[i].classList.remove("drop-toggle")
    }
}

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    // fade: true,
  });
let next=document.getElementsByClassName("slick-next")[0]
let prev=document.getElementsByClassName("slick-prev")[0]
next.innerHTML=`<i class="fa-solid fa-circle-left left-icon"></i>`
prev.innerHTML=`<i class="fa-solid fa-circle-right right-icon"></i>`

// views Counter
let counts=setInterval(updated);
    let upto=0;
    function updated(){
        var count= document.getElementById("counter");
        count.innerHTML=++upto;
        if(upto===1700)
        {
            clearInterval(counts);
        }
}