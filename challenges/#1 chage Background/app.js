// todo change background 

btn.addEventListener("click", () =>
{
    let red = Math.round(Math.random() * 255)
    ,   green = Math.round(Math.random() * 255)
    ,   blue = Math.round(Math.random() * 255)
    ,   rgb = `rgb(${red},${green},${blue})`
    
    document.body.style.backgroundColor = rgb

    console.log(rgb)
})