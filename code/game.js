function check(event){
    if (event) event.preventDefault();
    R1=document.getElementById("web").value
    A1=document.getElementById("answer1")

    if(R1=="MO"){
        A1.src="../media/bien.png"
    }
    else{
        A1.src="../media/css.png"
    }
    A1.style.visibility="visible"
}