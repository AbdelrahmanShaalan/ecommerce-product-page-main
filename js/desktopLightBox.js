const lightBoxThumbnails = ["images/image-product-1-thumbnail.jpg","images/image-product-2-thumbnail.jpg","images/image-product-3-thumbnail.jpg","images/image-product-4-thumbnail.jpg"],
thumbnails = document.querySelectorAll("#thumbnails figure"),
desktopCurrentImage = document.querySelector("#desktopCurrentImage");

thumbnails.forEach((element) => {
    element.onclick = (event) => {
        let indexOfThumbnail = lightBoxThumbnails.indexOf(event.target.children[0].getAttribute("src"))

        for(e of thumbnails) {
            e.classList.remove("active")
        }
        
        event.target.classList.add("active")
        desktopCurrentImage.setAttribute("src" , lightBoxImages[indexOfThumbnail])
    }
})