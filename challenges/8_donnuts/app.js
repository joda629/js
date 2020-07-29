let all = document.getElementById("all")
,   sweet = document.getElementById("sweets")
,   cupcakes = document.getElementById("cupcakes")
,   donut = document.getElementById("donuts")
,   cake = document.getElementById("cakes")
,   allEle = document.getElementsByClassName("all")
,   card = document.getElementsByClassName("card")

all.addEventListener("click", e =>
{
    e.preventDefault() 
    for (let i of allEle)
    {
        i.style.display = "block"
    }
})

donut.addEventListener("click", e =>
{
    e.preventDefault() 
    for (let i of card)
    {
        i.style.display = "block"
        let attr = i.getAttribute("data-name")
        if(!(attr ===  "donut"))
        {
            // console.log(attr)
            i.style.display = "none"
        }
    }
})

sweet.addEventListener("click", e =>
{
    e.preventDefault()
    for (let i of card)
    {
        i.style.display = "block"
        let attr = i.getAttribute("data-name")
        if(!(attr ===  "sweet"))
        {
            i.style.display = "none"
        }
    }
})

cupcakes.addEventListener("click", e =>
{
    e.preventDefault()
    for (let i of card)
    {
        i.style.display = "block"
        let attr = i.getAttribute("data-name")
        if(!(attr ===  "cupcake"))
        {
            i.style.display = "none"
        }
    }
})


cake.addEventListener("click", e =>
{
    e.preventDefault()
    for (let i of card)
    {
        i.style.display = "block"
        let attr = i.getAttribute("data-name")
        if(!(attr ===  "cake"))
        {
            i.style.display = "none"
        }
    }
})