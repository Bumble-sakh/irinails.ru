/*==================== ACTIVE MENU LINK ====================*/
const menuItems = document.querySelectorAll('.nav-link');
const collapseArea = document.querySelector('.collapse');

function menuItemActive(event) {
    for (const item of menuItems) {
        item.classList.remove('active');
    }
    event.currentTarget.classList.add("active");
    collapseArea.classList.remove('show')
}

for (const item of  menuItems) {
    item.addEventListener('click', menuItemActive);
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('[id]');

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 300;
        sectionId = current.getAttribute('id')
        console.log(sectionId);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

window.addEventListener('scroll', scrollActive)