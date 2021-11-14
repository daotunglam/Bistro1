

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
// if(window.pageYOffset < '300px'){
//     document.getElementById('onTopButton').style.display = 'none';
// }
// else{
//     document.getElementById('onTopButton').style.display = 'block';
// }
function onTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}