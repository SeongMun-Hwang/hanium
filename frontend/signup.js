window.onload=password();
function password(){
    let x=document.getElementsByClassName("pw");
    if(x[0].value==x[1].value){
        x[2].style.display="inline";
    }
    else{
        x[3].style.display="inline";
    }
}