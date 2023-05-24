const backgrounds = document.querySelector('#backgrounds')
const navbar = document.querySelector('#navbar')
const navLinks = document.querySelectorAll('.navbar-link')
const mainContent = document.querySelectorAll('.main-content')
const hoursContent = document.querySelector('#hours-content')
const menuContent = document.querySelector('#menu-content')
const shopContent = document.querySelector('#shop-content')
const cateringContent = document.querySelector('#catering-content')
const aboutContent = document.querySelector('#about-content')
const cartContent = document.querySelector('#cart-content')


// #region navbar
navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        if (link.id == 'home'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                backgrounds.className = 'home-bg'
            }, 300);

        } else if (link.id == 'menu'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                menuContent.classList.remove('content-not-visible')
                backgrounds.className = 'menu-bg'
            }, 300);

        } else if (link.id == 'shop'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                shopContent.classList.remove('content-not-visible')
                backgrounds.className = 'shop-bg'
            }, 300);

        } else if (link.id == 'catering'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                cateringContent.classList.remove('content-not-visible')
                backgrounds.className = 'catering-bg'
            }, 300);

        } else if (link.id == 'about'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                aboutContent.classList.remove('content-not-visible');
                backgrounds.className = 'about-bg'
            }, 300);
            
        } else if (link.id == 'cart'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                cartContent.classList.remove('content-not-visible')
                backgrounds.className = 'cart-bg'
            }, 300);

        } else if (link.id == 'hours'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                hoursContent.classList.remove('content-not-visible');
                backgrounds.className = 'hours-bg'
            }, 300);

        } else {
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                backgrounds.className = 'home-bg'
            }, 300);
    
        }
    })
})
// #endregion

// navLinks.forEach(link=>{
//     link.addEventListener('click',()=>{
//         if (link.id == 'home'){
//             backgrounds.classList.add('fade')
//             setTimeout(() => {
//                 mainContent.forEach(card=>{
//                     card.classList.add('content-not-visible')
//                 })     
//                 backgrounds.className = 'home-bg'
//             }, 300);

//         } else if (link.id == 'menu'){
//             backgrounds.classList.add('fade')
//             setTimeout(() => {
//                 mainContent.forEach(card=>{
//                     card.classList.add('content-not-visible')
//                 })     
//                 menuContent.classList.remove('content-not-visible')
//                 backgrounds.className = 'menu-bg'
//             }, 300);

//         } else if (link.id == 'shop'){
//             backgrounds.classList.add('fade')
//             setTimeout(() => {
//                 mainContent.forEach(card=>{
//                     card.classList.add('content-not-visible')
//                 })     
//                 shopContent.classList.remove('content-not-visible')
//                 backgrounds.className = 'shop-bg'
//             }, 300);

//         } else if (link.id == 'catering'){
//             backgrounds.classList.add('fade')
//             setTimeout(() => {
//                 mainContent.forEach(card=>{
//                     card.classList.add('content-not-visible')
//                 })     
//                 cateringContent.classList.remove('content-not-visible')
//                 backgrounds.className = 'catering-bg'
//             }, 300);

//         } else if (link.id == 'about'){
//             backgrounds.classList.add('fade')
//             setTimeout(() => {
//                 mainContent.forEach(card=>{
//                     card.classList.add('content-not-visible')
//                 })     
//                 hoursContent.classList.remove('content-not-visible');
//                 backgrounds.className = 'about-bg'
//             }, 300);
            
//         } else if (link.id == 'cart'){
//             backgrounds.classList.add('fade')
//             setTimeout(() => {
//                 mainContent.forEach(card=>{
//                     card.classList.add('content-not-visible')
//                 })     
//                 cartContent.classList.remove('content-not-visible')
//                 backgrounds.className = 'cart-bg'
//             }, 300);

//         } else {
//             backgrounds.classList.add('fade')
//             setTimeout(() => {
//                 mainContent.forEach(card=>{
//                     card.classList.add('content-not-visible')
//                 })                
//                 backgrounds.className = 'home-bg'
//             }, 300);
    
//         }
//     })
// })








async function getMenu(){
    const url = `https://my-json-server.typicode.com/reric88/StorehouseCoffee/db`
    const menu = await axios.get(url);
    const baked = menu.data.bakedGoods
    const coffee = menu.data.coffee
    console.log(menu);
    menuContent.innerHTML = `
    <h1>${baked.muffins[0].name}</h1>
    `
    coffee.brewed.forEach(type=>{
        console.log(type.size, type.roast);
    })
    // console.log(coffee.brewed);

}


getMenu()
