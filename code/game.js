function check(event){
    if (event) event.preventDefault();

    if(document.getElementById("web").value == "MO"){
        document.getElementById("recuadro").innerHTML += '<img src="../media/bien.png" alt="Respuesta correcta" style="width:150px; display:block; margin:10px auto;">';
    }
    else{
        document.getElementById("recuadro").innerHTML += '<img src="../media/mal.png" alt="Respuesta incorrecta" style="width:150px; display:block; margin:10px auto;">';
    }
}


function check(event){
    if (event) event.preventDefault();

    if(document.getElementById("que").value == "CC"){
        document.getElementById("2.0").innerHTML += '<img src="../media/bien.png" alt="Respuesta correcta" style="width:150px; display:block; margin:10px auto;">';
    }
    else{
        document.getElementById("2.0").innerHTML += '<img src="../media/mal.png" alt="Respuesta incorrecta" style="width:150px; display:block; margin:10px auto;">';
    }
}