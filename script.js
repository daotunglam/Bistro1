/**
 * TOGGLE MENU
 */
function toggleNavbar(){
    let navbar = document.getElementById('navbar');
    if(window.getComputedStyle(navbar).getPropertyValue('display') == 'none'){
        navbar.style.display = 'block';
    }
    else{
        navbar.style.display = 'none';
    }
}




/**
 * HIDE INTRO-VIDEO BY SCROLLING
 */
 window.addEventListener('scroll', hideVideo);
 function hideVideo() {
     if(document.body.scrollTop>0 || document.documentElement.scrollTop>0){
         document.getElementById('intro_video').classList.add('hide_video');
     }else{
         document.getElementById('intro_video').className='';
     }
 }