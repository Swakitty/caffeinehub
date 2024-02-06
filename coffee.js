let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar=document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}
function click(){
    let valid=false;
    if(document.getElementById("satisfied").checked){
        valid=true;
    }
    else if(document.getElementById("good").checked){
        valid=true;
    }
    else if(document.getElementById("bad").checked){
        valid=true;
    }
    else if(document.getElementById("not bad").checked){
        valid=true;
    }
    
}

let header=document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY>0);
});