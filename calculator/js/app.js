/*
    todo Crear una calculadora con las funciones básicas por ahora, que serian suma, resta, multi, división
    
    ? Hacerla para movil básica, y para pc hacerla cientifica.

*/


// todo capturar todos los botones, y espacios donde se muestran los resultados

// *ya estan capturados los dos campos donde obtengo la operación y donde la voy a mostrar

let txtOperaciones = document.getElementById("valor"),
    txtMostrar=document.getElementById("showValor")

// * capturamos todos los botones y los ponemos a la escucha, y mostramos en la pantalla lo que van presionando

let btn=document.querySelectorAll(".buttons button")


// * creamos un for para que recorra todos los butttons que tenemos y les ponemos  a la escucha del event click
for(let i=0; i<btn.length; i++)
{
    btn[i].addEventListener("click", () =>
    {
        let dataV=btn[i].getAttribute("data-value")

        txtOperaciones.textContent+=dataV

    })
}


// * capturamos los dos botones para eliminar de un elemento, y eliminar todo

let delAll=document.getElementById("deleteAll"),
    delOne=document.getElementById("deleteOne")

delAll.addEventListener("click", ()=>
{
    txtOperaciones.innerHTML="" 
})

delOne.addEventListener("click", ()=>
{
    let arr=txtOperaciones.innerHTML.split("")
    let final=arr
    console.log(final);
    
})


