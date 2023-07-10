const nextButton = document.querySelector("#nextButton"),
previousButton = document.querySelector("#previousButton"),
currentImage = document.querySelector("#mobileLightboxImage");
let index = 0;

currentImage.src = lightBoxImages[index]

nextButton.addEventListener("click" , () => {
    ++index
    if(index > 3) {
        index = 0
    }
    currentImage.src = lightBoxImages[index]
})

previousButton.addEventListener("click" , () => {
    --index
    if(index < 0) {
        index = 3
    }
    currentImage.src = lightBoxImages[index]
})
