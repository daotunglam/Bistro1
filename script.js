/**
 * HTML INCLUDE TEMPLATE
 */
 function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
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



 
/**
 * SHOW HIDE
 */
function show(x){
    document.getElementById(x).style.display = 'flex';
}
function hide(x){
    document.getElementById(x).style.display = 'none';
}





/**
 * ZOOM MENU
 */
function zoom(x){
    document.getElementById(x).classList.toggle('width-300')
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