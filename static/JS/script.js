const backgrounds = document.querySelector('#backgrounds')
const navbar = document.querySelector('#navbar')
const navLinks = document.querySelectorAll('.navbar-link')
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
                backgrounds.className = 'home-bg'
            }, 300);

        } else if (link.id == 'menu'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                backgrounds.className = 'menu-bg'
            }, 300);

        } else if (link.id == 'shop'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                backgrounds.className = 'shop-bg'
            }, 300);

        } else if (link.id == 'catering'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                backgrounds.className = 'catering-bg'
            }, 300);

        } else if (link.id == 'about'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                backgrounds.className = 'about-bg'
            }, 300);
            
        } else if (link.id == 'cart'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                backgrounds.className = 'cart-bg'
            }, 300);

        } else {
            backgrounds.classList.add('fade')
            setTimeout(() => {
                backgrounds.className = 'home-bg'
            }, 300);
    
        }
    })
})
// #endregion

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
