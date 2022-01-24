// Select Elements
const tablinks = document.querySelectorAll('.content-nav > button');
let tabs = document.querySelectorAll('.tab-content');
let sideBarLinks = document.querySelectorAll('.s-links');
let inventoryLink = document.querySelector('.inventory-link');
// clears all active tablinks and tab before activating a new one..
const clear = () => {

    tabs.forEach(tab => {
        tab.classList.remove('show');
    });
    tablinks.forEach(button => {
        button.classList.remove('active-link');
    });
};

// activates the current tab link and tab
const activateCurrentTab = (event) => {
    event.target.classList.add('active-link');
    let currentTab = document.getElementById(event.target.id);
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].id === event.target.id) {
            tabs[i].classList.add('show');

        }

    }
};
// loop through buttons and add events
tablinks.forEach(button => button.addEventListener('click', (event) => {
    clear();
    activateCurrentTab(event);
}));

// inventory link dropdown logic
// addeventlistener
// check data atributes of link tag, base on returned boolean, 
// change arrow icon and either show or hide dropdown...
inventoryLink.addEventListener('click', (event) => {
    const img = document.querySelector('.inventory-arrow');
    if (inventoryLink.dataset.arrow === "down") {
        img.src = "/assets/up_arrow.png";
        const dropdown = document.querySelector('.inventory-dropdown');
        dropdown.classList.add('show2');
        inventoryLink.dataset.arrow = "up";
    } else {
        img.src = "/assets/down_arrow.png";
        const dropdown = document.querySelector('.inventory-dropdown');
        dropdown.classList.remove('show2');
        inventoryLink.dataset.arrow = "down";
    }

});