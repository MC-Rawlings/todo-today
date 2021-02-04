

export function toggleLists() {
    const toggleBtn = document.querySelector(".toggle-lists");
    const lists = document.querySelector(".lists");

    toggleBtn.addEventListener("click", () => {
        (lists.style.display === "none" ?
        lists.style.display = "flex" :
        lists.style.display = "none");
    })
}