// todo slider

let imgs = ["download.png", "https://cdn.wallpapersafari.com/96/91/s4vypk.jpg", "https://martechtoday.com/wp-content/uploads/2018/08/AI-model_pqwxl3.png", "https://www.russellstone.co.za/wp-content/uploads/177924.jpg", "https://images6.alphacoders.com/102/1024956.jpg", "https://images3.alphacoders.com/935/935139.jpg"]
,   num = 0

img.src = imgs[0]

next.addEventListener("click", () =>
{
    num++
    if(num > imgs.length - 1) num = 0

    img.src = imgs[num]
})

prev.addEventListener("click", () =>
{
    num--
    if(num < 0) num = imgs.length - 1

    img.src = imgs[num]
})