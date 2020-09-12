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


// ************* second part -> modal


// * click over gallery

let close = document.getElementById("close")
,   modal = document.querySelector(".modal")
,   img = document.querySelector(".img_modal")
,   imgs = ["https://romeojeremiah.github.io/Filter-Project/img/sweets-1.jpeg", "https://romeojeremiah.github.io/Filter-Project/img/sweets-2.jpeg", "https://romeojeremiah.github.io/Filter-Project/img/sweets-3.jpeg", "https://romeojeremiah.github.io/Filter-Project/img/doughnut-1.jpeg", "https://romeojeremiah.github.io/Filter-Project/img/doughnut-2.jpeg","https://romeojeremiah.github.io/Filter-Project/img/doughnut-3.jpeg", "https://romeojeremiah.github.io/Filter-Project/img/cupcake-1.jpeg", "https://romeojeremiah.github.io/Filter-Project/img/cupcake-2.jpeg", "https://romeojeremiah.github.io/Filter-Project/img/cupcake-3.jpeg", "https://romeojeremiah.github.io/Filter-Project/img/cake-1.jpeg", "https://romeojeremiah.github.io/Filter-Project/img/cake-2.jpeg", "https://romeojeremiah.github.io/Filter-Project/img/cake-3.jpeg"]
,   con = 0
,   positionImg = null

gallery.addEventListener("click", e =>
{
    let target = e.target
    if(target.matches(".imgCard"))
    {
        positionImg = imgs.indexOf(target.src)
        modal.style.display = "block"
        img.src = target.src
        document.body.style.overflow = "hidden"
    }
})


// * close modal


close.addEventListener("click", e =>
{
    e.preventDefault()
    modal.style.display = "none"    
    document.body.style.overflow = ""
})

// * left,right arrow

modal.addEventListener("click", e =>
{
    let target = e.target
    if(target.matches(".left"))
    {
        e.preventDefault()
        positionImg--
        if(positionImg < 0) positionImg = imgs.length - 1
        img.src = imgs[positionImg]

    }
    if(target.matches(".right"))
    {
        e.preventDefault()
        positionImg++
        if(positionImg > imgs.length - 1) positionImg = 0
        img.src = imgs[positionImg]
    }
})
