// Your code goes here
window.addEventListener('load', (event) => {
    console.log('page has loaded');
});

// Added sub-text for button press
const subText = document.createElement('h3');
subText.textContent = "Press A, O, R, Y, B, W, to change color :)";
subText.style.fontSize = "1.5rem";
const h1 = document.querySelector('h1');
h1.appendChild(subText);
h1.style.textAlign = "center";



// Change the body color with the press of a key
window.addEventListener("keydown", event => {
    if (event.key == 'a') {
        document.body.style.background = 'aqua'
        document.body.style.visibility = 'visible'
    }
    if (event.key == 'w') {
        document.body.style.background = 'white'
        document.body.style.visibility = 'visible'
        alert('And, were back')
    }
    if (event.key == 'o') {
        document.body.style.background = 'orange'
        document.body.style.visibility = 'visible'
    }
    if (event.key == 'r') {
        document.body.style.background = 'red'
        document.body.style.visibility = 'visible'
    }
    if (event.key == 'y') {
        document.body.style.background = 'yellow'
        document.body.style.visibility = 'visible'
    }
    if (event.key == 'b') {
        document.body.style.background = 'black'
        document.body.style.visibility = 'hidden'
        alert("Congratulations, you deleated the page!")
    }

    console.log(event.key)
})

// Scroll event
window.addEventListener('scroll', (event) => {
    //alert('You-re scrolling');
    console.log('You found the mouse wheel');
});


const navigation = document.querySelectorAll('.nav-link');
navigation[2].href = "https://www.w3schools.com/cssref/css_colors.asp";
navigation[2].addEventListener('click', (event) => {
    event.preventDefault();
});

navigation.forEach((element) => {
    element.style.padding = "1.5rem";
    element.style.textDecoration = "none";
});

const navBar = document.querySelector('.nav');
navBar.style.padding = "3rem";
navBar.style.dispalyFlex = "flex";
navBar.style.justifyContent = "space-between";
navBar.style.alignItems = "space-between";
navigation.forEach((element) => {
    element.style.fontSize = "1.3rem";
    element.style.color = "black";
    
});

//console.log(navBar);
navigation.forEach((element) => element.addEventListener('mouseover', (event) => {
    element.style.transforme = "scale(2)";
    element.style.background = "gray";
    element.style.color = "green";
    
}));

navigation.forEach((element) => {
    element.addEventListener('mouseout', (event) => {
        element.style.transforme = "none";
        element.style.background = "white";
        element.style.color = "#00BFFF";
        
    })
});

// Focas Event
window.addEventListener('focus', (event) => {
    console.log('You can focas, yay!');
});

// Mouseover Event

const headerColor = document.querySelectorAll('.text-content > h2')
headerColor.forEach(attr => attr.addEventListener('mouseover', () => attr.style.color = 'royalblue'))
navColor.forEach(attr => attr.addEventListener('mouseover', function(event) {
    event.preventDefault()
}))



