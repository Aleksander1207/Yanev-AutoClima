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

function toggleServices(serviceNum){
    let dropdowns = document.getElementsByClassName('dropdown-content');
    let signs = document.getElementsByTagName('i');
    if(signs[serviceNum+1].className == 'fas fa-plus'){
        dropdowns[serviceNum].style.display = 'block';
        signs[serviceNum+1].className = 'fas fa-minus';
    }
    else{
        dropdowns[serviceNum].style.display = 'none';
        signs[serviceNum+1].className = 'fas fa-plus';
    }
}