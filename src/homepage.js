// const loadHomepage = () => {

//     const 

// }

const loadNavBar = () => {

    const nav = document.createElement('header');
    nav.classList.add('main-header');
    nav.innerHTML = `
        <header class="home-logo">ToDOToday</header>
        <button class="save-btn">SAVE</button>`;

    return nav;

}

export default loadNavBar;