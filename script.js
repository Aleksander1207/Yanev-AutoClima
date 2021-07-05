function toggleNavigation(){
    let navLinks = document.getElementsByClassName('topnav');
    for(let i=0;i<navLinks.length;i++){
        if(navLinks[i].style.display == 'block'){
            navLinks[i].style.display = 'none';
        }
        else{
            navLinks[i].style.display = 'block';
        }
    }
    
}