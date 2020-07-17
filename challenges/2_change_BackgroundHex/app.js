// todo bacnground-color with hexadecimal

// * array que tiene todos los valores de un hexadecimal
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

btn.addEventListener("click", () =>
{
    // * contiene la cantidad de mis elementos
    let hexLength = hex.length - 1
    , n1 = Math.floor(Math.random() * hexLength)
    , n2 = Math.floor(Math.random() * hexLength)
    , n3 = Math.floor(Math.random() * hexLength)
    , n4 = Math.floor(Math.random() * hexLength)
    , n5 = Math.floor(Math.random() * hexLength)
    , n6 = Math.floor(Math.random() * hexLength)
    , colorHex = ` #${hex[n1]}${hex[n2]}${hex[n3]}${hex[n4]}${hex[n5]}${hex[n6]}`

    document.body.style.backgroundColor = colorHex

    txt.textContent = colorHex

})