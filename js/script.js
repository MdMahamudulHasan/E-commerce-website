
let searchform = document .querySelector('.search-form');

    document .querySelector('#search-btn').onclick = () =>{
        searchform.classList.toggle('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        headernavbar.classList.remove('active');
    }
let shoppingCart = document .querySelector('.shopping-cart');

    document .querySelector('#cart-btn').onclick = () =>{
        shoppingCart.classList.toggle('active');
        searchform.classList.remove('active');
        loginForm.classList.remove('active');
        headernavbar.classList.remove('active');
    }

let loginForm = document .querySelector('.login-form');

    document .querySelector('#user-btn').onclick = () =>{
        loginForm.classList.toggle('active');
        searchform.classList.remove('active');
        shoppingCart.classList.remove('active');
        headernavbar.classList.remove('active');
    }


let headernavbar = document .querySelector('.navbar');

    document .querySelector('#menu-btn').onclick = () =>{
        headernavbar.classList.toggle('active'); 
        searchform.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active'); 
    }

window.onscroll = () =>{
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    headernavbar.classList.remove('active');
}


// ----------------------product Initialize Swiper-------
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    centeredlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

// ----------------------review Initialize Swiper-------

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    centeredlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });