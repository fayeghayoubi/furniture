const $ = document;
const burgerBtn = $.querySelector(".toggle-open");
const burgerCloseBtn = $.querySelector(".toggle-close");
const navigationBarMobile = $.querySelector(".navigation-bar__mobile")
const scrollUp = $.querySelector(".scrollup")


burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.add("hidden");
    burgerCloseBtn.classList.remove("hidden");
    navigationBarMobile.classList.remove("hidden")
    
})
burgerCloseBtn.addEventListener("click", () => {
    burgerBtn.classList.remove("hidden")
    burgerCloseBtn.classList.add("hidden")
    navigationBarMobile.classList.add("hidden")
})

document.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop > 2300){
        scrollUp.classList.remove("hidden")
    }else if(document.documentElement.scrollTop < 2250) {
        scrollUp.classList.add("hidden")
    }
    
})

scrollUp.addEventListener('click',()=>{
    document.documentElement.scrollTo(0,0)
})