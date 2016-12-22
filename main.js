function calcular()
{
    var vacation = document.getElementById("vacaciones").value;
    var weekday = parseInt(document.getElementById("dia").value);

    var isVacation = true;
    var isWeekday = false;
    var img;
    var salida = document.getElementById("salida");

    if(vacation == "2")
    {
        isVacation = false;
    }

    if(weekday < 6)
    {
        isWeekday = true;
    }

    if(isVacation)
    {
        salida.innerHTML = "Puedes Dormir!!";
        document.getElementById("img").innerHTML="<img src='image/dormirsi.png'>";
    }else{
        if(isWeekday)
        {
            salida.innerHTML = "No puedes Dormir!!";
            document.getElementById("img").innerHTML="<img class='img-responsive' src='image/dormirno.jpg'>";
        }else{
            salida.innerHTML = "Puedes Dormir!!";
            document.getElementById("img").innerHTML="<img class='img-responsive' src='image/dormirsi.png'>";
        }
    }
}

