const pageLinks = document.querySelectorAll("nav a");

pageLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        pageLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});