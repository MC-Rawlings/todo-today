export const loadMain = () => {

    const main = document.createElement("main");
    main.classList.add("main-section");
    main.innerHTML = `
        <h2>Personal</h2>

        <div class="task-list-wrapper">
            <ul class="task-list">
                <li class="task-item">do dishes
                    <span class="task-info">clean up the kitchen bofore...</span>
                    <div class="task-priority"></div>
                </li>
                <li class="task-item">do dishes</li>
                <li class="task-item">do dishes</li>
                <li class="task-item">do dishes</li>
                <li class="task-item">do dishes</li>
                <li class="task-item">do dishes</li>
                <li class="task-item">do dishes</li>
                <li class="task-item">do dishes</li>
                <li class="task-item">do dishes</li>
                <li class="task-item">do dishes</li>
                <li class="task-item">do dishes</li>
                <li class="task-item">do dishes</li>
                <li class="task-item">do dishes</li>
            </ul>
        </div>

        <button type="button">+</button>
    `;

    return main;
}