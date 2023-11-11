const imageElements = document.querySelectorAll('img[src=".png"], [src=".jpeg"], [src=".jpg"]');
const body = document.querySelector('body');

imageElements.forEach((imageElement)=>{
    imageElement.addEventListener('click', (e)=>{
        e.preventDefault()
        const srcOfImage = getSrcOfImage(imageElement);
        setSrcOnImgLightBox(srcOfImage)
    })
})


function getSrcOfImage(element) {
    const src = element.getAttribute("src");
    console.log(src);
    return src
}

function setSrcOnImgLightBox(srcImage){
    const div = document.createElement('DIV');
    div.setAttribute("class", "lightbox")
    div.innerHTML=`<button class="lightbox__close">Fermer</button>
    <button class="lightbox__next">Suivant</button>
    <button class="lightbox__prev">Precedent</button>
    <div class="lightbox__container">
        <img src="${srcImage}" alt="">
    </div>`
    body.appendChild(div);
}