const myInfo = (title, definition, buttonName) => {
    let div = document.createElement("div")
    div.innerHTML = `<h1>${title}</h1>
                    <p>${definition}</p>
                    <button>${buttonName}</button>
                    `
    return div
}

export { myInfo }

