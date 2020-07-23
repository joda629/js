
let testimonies = 
[
    { user : "Jorge", logo : "https://www.flaticon.com/premium-icon/icons/svg/2667/2667378.svg", txt : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
    },
    {
        user : "David", logo : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png", txt : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"
    },
    {
        user : "Polo", logo : "https://www.flaticon.com/premium-icon/icons/svg/3054/3054178.svg", txt : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
    },
    {
        user : "Jordan", logo : "https://image.flaticon.com/icons/svg/2922/2922506.svg", txt : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
]
, img = document.getElementById("img")
, title = document.getElementById("title")
, txt = document.getElementById("testimonies")
, prev = document.getElementById("prev")
, next = document.getElementById("next")
, con = 0

img.src = testimonies[0].logo
title.textContent = testimonies[0].user
txt.textContent = testimonies[0].txt

next.addEventListener("click", () =>
{
    con++
    if(con === testimonies.length) con = 0

    img.src = testimonies[con].logo
    title.textContent = testimonies[con].user
    txt.textContent = testimonies[con].txt
})

prev.addEventListener("click", () =>
{
    con--
    if(con < 0 ) con = testimonies.length  - 1

    img.src = testimonies[con].logo
    title.textContent = testimonies[con].user
    txt.textContent = testimonies[con].txt
})
