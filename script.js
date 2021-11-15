

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



 
/**
 * ONTOP BUTTON
 */
 window.addEventListener('scroll', ()=>{
     if(window.pageYOffset > 300){
         document.getElementById('onTopButton').style.display = 'block';
    }
    else{
         document.getElementById('onTopButton').style.display = 'none';
     }
 })
function onTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}