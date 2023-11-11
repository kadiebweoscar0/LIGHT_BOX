const imageElements = document.querySelectorAll('img[src=".png"], [src=".jpeg"], [src=".jpg"]');

imageElements.forEach((imageElement)=>{
    imageElement.addEventListener('click', (e)=>{
        e.preventDefault()
        getSrcOfImage(imageElement)
    })
})


function getSrcOfImage(element) {
    const src = element.getAttribute("src");
    return src
}

