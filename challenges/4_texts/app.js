// todo show message


btn.addEventListener("click", e =>
{
    e.preventDefault()
    if(txt.value === "" || txt.value === " ")
    {
        return alert("The field cannot be empty")
    }

    final.innerHTML = txt.value
    txt.value = ""
})