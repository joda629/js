let all = document.getElementById("all")
,   sweet = document.getElementById("sweets")
,   cupcakes = document.getElementById("cupcakes")
,   donut = document.getElementById("donuts")
,   cake = document.getElementById("cakes")
,   allEle = document.getElementsByClassName("all")
,   card = document.getElementsByClassName("card")
,   gallery = document.getElementById("gallery")
,   search  = document.getElementById("search")


// class Cards
// {
//     constructor(title, price, img)
//     {
//         this.title = title
//         this.price = price
//         this.img   = img
//     }

//     set create(hi)
//     {
//         this.card = 
//         `
//             <div class="card all " data-name="sweet">
//                 <figure class="figureCard">
//                     <img src="${this.img}" alt="" class="imgCard">
//                 </figure>
//                 <p class="infoCard">
//                     ${this.title} Item <span>${this.price}</span>
//                 </p>
//             </div>
//         `

//         gallery.appendChild(this.card)
//     }

//     get create()
//     {
//         return gallery
//     }
// }

// let sweets = 
// [
//     new Card("Sweet", "$5", "https://romeojeremiah.github.io/Filter-Project/img/sweets-1.jpeg"),
//     new Card("Sweet", "$10", "https://romeojeremiah.github.io/Filter-Project/img/sweets-2.jpeg"),
//     new Card("Sweet", "$15", "https://romeojeremiah.github.io/Filter-Project/img/sweets-3.jpeg")
// ]




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
        if(!(attr ===  "cakes"))
        {
            i.style.display = "none"
        }
    }
})


search.addEventListener("input", () =>
{
    let value = search.value
    console.log(value)

    for(let i of card)
    {
        i.style.display = "block"
        let attr = i.getAttribute("data-name")
        if(!(attr.includes(value)))
        {
            i.style.display = "none"
        }

    }
})

