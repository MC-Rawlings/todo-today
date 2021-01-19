export const loadNavBar = () => {

    const navBar = document.createElement("nav");
    navBar.classList.add("navBar");
    navBar.innerHTML = `
        <h3 class="nav-heading">My Lists</h3>
        <hr class="nav-hr">
        <ul>
            <li class="nav-link">Personal</li>
            <li class="nav-link">Work</li>
            <li class="nav-link">Fitness</li>
        </ul>
    `;

    return navBar;
}