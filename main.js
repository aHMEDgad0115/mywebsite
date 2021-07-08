const hump=document.querySelector('.header .nav-bar .list .humb');
const mobile=document.querySelector('.header .nav-bar .list ul');
const header1 = document .querySelector('header .container');
const menu=document.querySelectorAll('.header .nav-bar .list ul li a');

hump.addEventListener('click',()=>{
    hump .classList.toggle('active');
    mobile .classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scrol=window.scrollY;
    if (scrol > 250) {
        header1.style.backgroundColor = "#29323c";
        
    }else{
        header1.style.backgroundColor = "transparent";

    }
});

menu.forEach((item) => {
    item.addEventListener('click',()=> {
        hump.classList.toggle('active');
        mobile.classList.toggle('active');
    });
});