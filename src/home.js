import sushiJPG from './sushi.jpg';

const homeBtn = document.querySelector(".homeButton");

function displayHome() {
    document.getElementById('content').innerHTML = '';
    let content = document.querySelector('#content');


    //Header creation
    let newHeader = document.createElement('Header');
    newHeader.className = "homeHeader";
    let newHeaderText = document.createTextNode("Best Sushi");
    newHeader.appendChild(newHeaderText);
    content.append(newHeader);


    //Main text creation
    let newInfo = document.createElement('p');
    newInfo.className = 'homeInfo';
    let textInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    let newInfoText = document.createTextNode(textInfo);
    newInfo.appendChild(newInfoText);
    content.append(newInfo);

    //Img display
    let newImg = document.createElement('img');
    newImg.src = sushiJPG
    content.append(newImg);

}

let displayContentHome = homeBtn.addEventListener("click", () => {
    displayHome();
});

export {displayContentHome};