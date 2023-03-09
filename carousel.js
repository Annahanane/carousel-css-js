let position = 0;
carousel();

function carousel(){
    let i;
    let image = document.getElementsByClassName("image");
    for(i=0 ;i<image.length; i++) {
    image[i].style.display = "none";
    }
    image[position].style.display = "inline";
    position++;
    if(position>image.length-1){
        position=0;
    }
    
    setTimeout(carousel,2500);

}


