function check(event){
    if (event) event.preventDefault();

    if(document.getElementById("primera").value == "MO"){
        document.getElementById("I1").innerHTML += '<img src="../media/bien.png" alt="Respuesta correcta">';
    }
    else{
        document.getElementById("I1").innerHTML += '<img src="../media/mal.png" alt="Respuesta incorrecta">';
    }
}