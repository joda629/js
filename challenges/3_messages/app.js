// todo generate sentences

let sentences = 
[
    {
        msg : "The Way Get Started Is To Quit Talking And Begin Doing.", author : "Walt Disney"
    },
    {
        msg : "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", author : "Winston Churchill"
    },
    {
        msg : "Don’t Let Yesterday Take Up Too Much Of Today.", author : "Will Rogers"
    },
    {
        msg : "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.", author : "Vince Lombardi"
    },
    {
        msg : "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.", author : "Steve Jobs"
    }
]
, msg = document.getElementById("msg")
, cite = document.getElementById("cite")
, con = 0


btn.addEventListener("click", () =>
{
    con = Math.floor(Math.random() * sentences.length)

    msg.innerHTML = `${sentences[con].msg}`
    cite.innerHTML = `${sentences[con].author}`
})

prev.addEventListener("click", () =>
{
    con-- 

    if(con < 0) con = sentences.length - 1

        msg.innerHTML = `${sentences[con].msg}`
        cite.innerHTML = `${sentences[con].author}`
})

next.addEventListener("click", () =>
{
    con++
    if(con === sentences.length) con = 0

        msg.innerHTML = `${sentences[con].msg}`
        cite.innerHTML = `${sentences[con].author}`
})