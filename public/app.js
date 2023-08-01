
// bar code start
let ham = document.getElementById('ham');
let menu = document.getElementById('menu');
let ud = document.getElementById('ud');
let toggle = 0;
ham.addEventListener('click',()=>{
    if(toggle==0){
        menu.style.display="block";
        ud.style.display="block";
        ham.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
        ham.style.color="red";
        toggle=1;
    }else{
        menu.style.display="none";
        ud.style.display="none";
        ham.innerHTML=`<i class="fa-solid fa-bars"></i>`;
        ham.style.color="white";
        toggle = 0;
    }
});

// Swiper code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 51,
    autoplay:{
        delay:2500
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// end of swiper code 




// slideTop code
let scroller = document.getElementById('scroller');
scroller.addEventListener('click',()=>{
    document.scrollTop=0;
    document.documentElement.scrollTop=0;
});