const modal = document.getElementById("skillsModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const closeFooterBtn = document.getElementById("closeModalFooterBtn");
const modalDownloadLink = document.querySelector(".modal-action");
const navbar = document.querySelector(".custom-navbar");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-menu a, .nav-contact a");

if (navbar && navToggle) {
    const setMenuState = (isOpen) => {
        navbar.classList.toggle("is-open", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
    };

    navToggle.addEventListener("click", () => {
        setMenuState(!navbar.classList.contains("is-open"));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                setMenuState(false);
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            setMenuState(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navbar.classList.contains("is-open")) {
            setMenuState(false);
        }
    });
}

if (modal && openBtn && closeBtn && closeFooterBtn) {
    const toggleModal = (isOpen) => {
        modal.classList.toggle("is-open", isOpen);
        modal.setAttribute("aria-hidden", String(!isOpen));
        document.body.style.overflow = isOpen ? "hidden" : "";
    };

    openBtn.addEventListener("click", () => toggleModal(true));
    closeBtn.addEventListener("click", () => toggleModal(false));
    closeFooterBtn.addEventListener("click", () => toggleModal(false));

    if (modalDownloadLink) {
        modalDownloadLink.addEventListener("click", () => toggleModal(false));
    }

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            toggleModal(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            toggleModal(false);
        }
    });
}
