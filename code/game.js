function check(){

    event.preventDefault();
    
    R1=document.getElementById("web").value;
    A1=document.getElementById("answer1");

    if(R1=="MO"){
        A1.src="../media/bien.png";
    }
    else{
        A1.src="../media/mal.png";
    }

    var R2=document.getElementsByName("curso")
    A2=document.getElementById("answer2")

    if (R2[2].checked){
        A2.src="../media/bien.png";
    }
    else{
        A2.src="../media/mal.png";
    }

    R3=document.getElementById("W20").value;
    A3=document.getElementById("answer3");

    if(R3=="CC"){
        A3.src="../media/bien.png";
    }
    else{
        A3.src="../media/mal.png";
    }

    R4 = document.getElementsByName("creacion");
    A4 = document.getElementById("answer4");

    if(R4[0].checked && R4[1].checked && R4[2].checked){
        A4.src = "../media/bien.png";
    } else {
        A4.src = "../media/mal.png";
    }

    R5 = document.getElementById("N9N").value; 
    A5 = document.getElementById("answer5");


    if (R5 === "2004-11-09") {
        A5.src = "../media/bien.png";
    } else {
        A5.src = "../media/mal.png";
    }

    R6 = document.getElementById("points").value; 
    A6 = document.getElementById("answer6");

    if (R6 == "1969") {  
        A6.src = "../media/bien.png";
    } else {
        A6.src = "../media/mal.png";
    }

    console.log("Ruta de la imagen:", A1.src);

    A1.style.visibility = "visible";
    A2.style.visibility = "visible";
    A3.style.visibility = "visible";
    A4.style.visibility = "visible";
    A5.style.visibility = "visible";
    A6.style.visibility = "visible";
}

