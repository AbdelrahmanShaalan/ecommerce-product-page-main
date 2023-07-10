const lightBoxImages = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"]
const overlay = document.querySelector("#overlay")

function hide(element) {
    element.classList.add("hidden")
}

function show(element) {
    element.classList.remove("hidden")
}

// mobile menu
const menuButton = document.querySelector("#menuButton"),
mobileMenu = document.querySelector("#mobileMenu"),
closeButton = document.querySelector("#closeButton");

menuButton.addEventListener("click" , () => {
    mobileMenu.classList.replace("hidden" , "flex")
    show(overlay)
    overlay.classList.add("bgBlack")
    document.body.style.overflow = "hidden"
})

closeButton.addEventListener("click" , () => {
    mobileMenu.classList.replace("flex" , "hidden")
    hide(overlay)
    document.body.style.overflow = "initial"
})

overlay.addEventListener("click" , () => {
    hide(cartModal)
    hide(overlay)
    hide(mobileMenu)
    document.querySelector("#desktopLightBoxActive").classList.replace("flex" , "hidden")
    document.body.style.overflow = "initial"
})

// increase and decrease buttons
const decreaseButton = document.querySelector("#decreaseOne")
const increaseButton = document.querySelector("#increaseOne")
const numberInput = document.querySelector("#numberInput")
const regex = /^[1-9][0-9]{0,3}$/

numberInput.addEventListener("blur" , () => {
    if(regex.test(numberInput.value) == false) {
        numberInput.value = 0
    }
})

decreaseButton.addEventListener("click" , () => {
    let inputValueNum = parseInt(numberInput.value)
    inputValueNum-= 1
    console.log(inputValueNum);
    if(regex.test(inputValueNum) == true || inputValueNum == 0) {
        //if regex.test => true (number start [1-9]) or (inputValueNum after decrease after increase (0 -> 1 -> 0))
        numberInput.value = inputValueNum
    }
})

increaseButton.addEventListener("click" , () => {
    let inputValueNum = parseInt(numberInput.value)
    inputValueNum+= 1
    if(regex.test(inputValueNum) == true) {
        numberInput.value = inputValueNum
    }
})

//Add to cart button
const addToCartButton = document.querySelector("#addToCartButton")

addToCartButton.addEventListener("click" , () => {
    if(numberInput.value != 0) {
        document.querySelector("#price").innerHTML = `$125.00 x ${numberInput.value} <span style="font-weight: 700;color: hsl(220, 13%, 13%);">$${numberInput.value * 125}.00</span>`
        document.querySelector("#cartSpan").innerHTML = numberInput.value
    }
    
    if (numberInput.value == 0) {
        document.querySelector("#cartSpan").innerHTML = ""
    }
})

// cart button
const cartButton = document.querySelector("#cart-button"),
cartModal = document.querySelector("#cartModal");

cartButton.addEventListener("click" , () => {
    show(cartModal)
    cartModal.classList.add("flex")
    show(overlay)
    overlay.classList.remove("bgBlack")
    if(numberInput.value > 0) {
        document.querySelector("#cartItem").classList.replace("hidden" , "flex")
        show(document.querySelector("#checkoutButton"))
        hide(document.querySelector("#cartContentHeading"))
        document.querySelector("#cartContent").classList.remove("justify-center")
    } else if (numberInput.value == 0){
        document.querySelector("#cartItem").classList.replace("flex" , "hidden")
        hide(document.querySelector("#checkoutButton"))
        show(document.querySelector("#cartContentHeading"))
        document.querySelector("#cartContent").classList.add("justify-center")
    }
})

const mainThumbnail = document.querySelector("#mainThumbnail")

mainThumbnail.addEventListener("click" , () => {
    let index = lightBoxImages.indexOf(mainThumbnail.children[0].getAttribute("src"))
    document.querySelector("#desktopLightBoxActive").classList.replace("hidden" , "flex")
    document.querySelector("#thumbnailsActive").children[index].click()
    show(overlay)
    document.body.style.overflow = "hidden"
})

const deleteButton = document.querySelector("#deleteButton")

deleteButton.addEventListener("click" , () => {
    numberInput.value = 0
    addToCartButton.click()
    cartModal.classList.add("hidden")
})
