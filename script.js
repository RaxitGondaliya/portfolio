const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click',() => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click',() => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click',( ) => {
        navbarMenu.classList.remove('active');
    })
})

// change background header 
function  scrollHeader(){
    const header = document.getElementById('header');
    this.scrolly >=20?header.classList.add('active'):header.classList.remove('active');
}

window.addEventListener('scroll',scrollHeader);


//scroll sections active links
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrolly = window.pageYOffset;

    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop -120;
    
        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId +']').classList.add('active-link');
        }
        else{
            document.querySelector('.menu a[href *=' + sectionId +']').classList.remove('active-link');
        }    
    })
}


window.addEventListener('scroll', scrollActive);


// resume scroll
const pages = document.querySelectorAll('.page');
const resume = document.querySelector('.resume');

function resumeActive(){
    const scrollY = window.pageYOffset;

    pages.forEach(page =>{
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 120;

        let sectionId = page.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.resume_tabs a[href *=' + sectionId +']').classList.add('current'); 
        }
        else{
            document.querySelector('.resume_tabs a[href *=' + sectionId +']').classList.remove('current');
        }
    })
}

window.addEventListener('scroll',resumeActive);

// project 

let filterItems = document.querySelectorAll('.project_filters li');

function activeproject(){
    filterItems.forEach(el => {
        el.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
}

filterItems.forEach(el => {
    el.addEventListener('click',activeproject);
})

//mixitup filter project

let mixerproject = mixitup('.project_wrap-container',{
    selectors:{
        target:'.project_item'
    },
    animation:{
        duration:300
    }
})
