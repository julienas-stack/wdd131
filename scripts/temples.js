// ===== Footer: current year and last modified date =====
function setFooterDates() {
    const yearSpan = document.getElementById("currentyear");
    const modifiedSpan = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }
}

// ===== Hamburger menu =====
function setupHamburgerMenu() {
    const menuButton = document.getElementById("menu");
    const nav = document.getElementById("primary-nav");

    if (!menuButton || !nav) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");

        // X when the menu is open, hamburger when it is closed
        menuButton.textContent = isOpen ? "X" : "☰";
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Reset the menu if the window is resized to the large view
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            nav.classList.remove("open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
}

// ===== Run everything =====
setFooterDates();
setupHamburgerMenu();