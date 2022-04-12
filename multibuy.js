function setSlider(el,option={}){
    if(!document.querySelector(el))return;
    let swiper = new Swiper(el,option);
}

function setSliderGen(el,option={},mediaQ){
    if(!document.querySelector(el)||!mediaQ)return;
    let swiper=null;
     function sSlider(){
         console.log('slidewr')
         if(document.documentElement.offsetWidth<=mediaQ){
            if(!swiper){
                swiper = new Swiper(el,option);
            }
         }else{
             if(swiper){
                swiper.destroy(true,true);
                swiper=null;
             }
         }
     }
     sSlider();
     window.addEventListener('resize',sSlider);
    
}



document.addEventListener('DOMContentLoaded',()=>{
    setSlider('.second-menu-swiper',{
        height:'auto',
        slidesPerView:'auto',
        spaceBetween: 15,
        
        freeMode: true,
        pagination:false,
        watchOverflow:true,
        breakpoints: {
            540:{
                spaceBetween: 35,
            }  
        }
      });
      setSlider('.participating_products-swiper',{
        height:'auto',
        spaceBetween: 29,
        preloadImages: false,
        freeMode: true,
        slidesPerView: 4,
        pagination:false,
        watchOverflow:true,
        lazy: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        breakpoints: {
            320:{
                slidesPerView: 'auto',
                spaceBetween: 0,
            },
            540:{
                spaceBetween: 35,
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1200:{
                slidesPerView: 3,
                spaceBetween: 29,
            },
            1600:{
                slidesPerView: 4,
                spaceBetween: 29,
            }
        }
      });
      setSliderGen('.participating-dealers-swiper',{
        height:'auto',
        spaceBetween: 52,
        preloadImages: false,
        freeMode: true,
        slidesPerView: 'auto',
        watchOverflow:true,
        lazy: true,    
      },768);
});