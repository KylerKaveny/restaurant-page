import locationImg from "./locations.png"


const locationBtn = document.querySelector(".locationsBtn");

function displayLocations() {
    document.getElementById('content').innerHTML = '';
    let newImg = document.createElement('img');
    newImg.src = locationImg;
    content.append(newImg);
}


let displayContentLocations = locationBtn.addEventListener("click", function() {
    displayLocations();
});

export {displayContentLocations};