export const loadHeader = () => {

    const nav = document.createElement("header");
    nav.classList.add("main-header");
    nav.innerHTML = `
        <header class="home-logo">ToDOToday</header>`;

    return nav;

}