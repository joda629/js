// * increase or decrease a number

// else if (num.innerHTML < 1)
// {
    //     num.classList.add("false")
    //     num.classList.remove("true")
    // }
    // else 
    // {
        //     num.classList.remove("false")
        // }
        
let num = document.getElementById("num")

increase.addEventListener("click", () =>
{
    num.textContent++
})

decrease.addEventListener("click", () =>
{
    num.textContent--
})

setInterval( () =>
{
    if(num.textContent > 0)
    {
        num.style.color = "chartreuse"
    }
    else if(num.textContent < 0)
    {
        num.style.color = "tomato"
    }
    else 
    {
        num.style.color = "black"
    }
})

