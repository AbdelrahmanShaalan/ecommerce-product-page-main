const lightBoxThumbnailsActive = ["images/image-product-1-thumbnail.jpg","images/image-product-2-thumbnail.jpg","images/image-product-3-thumbnail.jpg","images/image-product-4-thumbnail.jpg"],
thumbnailsActive = document.querySelectorAll("#thumbnailsActive figure"),
desktopCurrentImageActive = document.querySelector("#desktopCurrentImageActive");

thumbnailsActive.forEach((element) => {
    element.onclick = (event) => {
        let indexOfThumbnail = lightBoxThumbnailsActive.indexOf(event.target.children[0].getAttribute("src"))

        for(e of thumbnailsActive) {
            e.classList.remove("active")
        }
        
        event.target.classList.add("active")
        desktopCurrentImageActive.setAttribute("src" , lightBoxImages[indexOfThumbnail])
    }
})

//close button in desktop light box (active)
const closeButtonDesktopLightBox = document.querySelector("#closeButtonDesktopLightBox")

closeButtonDesktopLightBox.addEventListener("click" , () => {
    hide(overlay)
    document.querySelector("#desktopLightBoxActive").classList.replace("flex" , "hidden")
    document.body.style.overflow = "initial"
})

const nextButtonActive = document.querySelector("#nextButtonActive")
const previousButtonActive = document.querySelector("#previousButtonActive")
let indexActive = lightBoxImages.indexOf(mainThumbnail.children[0].getAttribute("src"))


nextButtonActive.addEventListener("click" , () => {
    ++indexActive
    if(indexActive > 3) {
        indexActive = 0
    }

    desktopCurrentImageActive.src = lightBoxImages[indexActive]

    for(e of thumbnailsActive) {
        e.classList.remove("active")
    }

    thumbnailsActive[indexActive].classList.add("active")
})

previousButtonActive.addEventListener("click" , () => {
    --indexActive
    if(indexActive < 0) {
        indexActive = 3
    }
    desktopCurrentImageActive.src = lightBoxImages[indexActive]

    for(e of thumbnailsActive) {
        e.classList.remove("active")
    }

    thumbnailsActive[indexActive].classList.add("active")
})