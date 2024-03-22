const myImage = (img) => {
    let div = document.createElement("div")
    div.innerHTML = `<img class = "images" src = "${img}">`
    
    return div
}

export { myImage }
