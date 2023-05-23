const backgrounds = document.querySelector('#backgrounds')
const navbar = document.querySelector('#navbar')
const navLinks = document.querySelectorAll('.navbar-link')

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
    const url = '../API/menu.json'
}
