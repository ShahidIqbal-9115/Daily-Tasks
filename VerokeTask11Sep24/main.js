

function ModalShow (){
    let modal = document.getElementById("modal-Section");
    if (modal.style.display="none") {
        modal.style.display="block"
        modal.style.justifyContent="center"
        modal.style.alignItems="center"
    }
}

function MenuShow (){
    let togal= document.getElementById("navBar");
    let close = document.getElementById("closeNavBar");
    if (togal.style.display="none") {
        togal.style.display="grid"
        close.style.display="flex"
    }
}

function MenuHide (){
    let togal= document.getElementById("navBar");
    let close = document.getElementById("closeNavBar");
    if (togal.style.display="flex") {
        togal.style.display="none"
        close.style.display="none"
        window.location.reload();
    }
}

function ModalHide (){
    let modal = document.getElementById("modal-Section");
    if (modal.style.display="block") {
        modal.style.display="none"
    }
}

function checkBox (){
    document.getElementsByClassName("checkBox-Span").style.backgroundcolor= "lightblue";
}