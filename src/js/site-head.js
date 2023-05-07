(function(){
    const menu = document.querySelector(".menu");
    const menuButton = document.querySelector("#menu__toggle");
    menuButton.addEventListener("click", () => {
        if(menu.getAttribute("data-open") == null) {
            menu.setAttribute("data-open", "");
        } else {
            menu.removeAttribute("data-open");
        }
    })
})();         

(function(){
    const dropdowns = document.querySelectorAll(".menu details");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseenter", () => {
            dropdown.setAttribute("open", "");
        });

        dropdown.addEventListener("mouseleave", () => {
            dropdown.removeAttribute("open");
        });
    })
})();         