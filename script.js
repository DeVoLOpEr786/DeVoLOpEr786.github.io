/* =========================================================
   SHAik SAHIL RIZWAN — PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================================
   HERO TYPING EFFECT
   ========================================================= */

const typingElement = document.getElementById("typing-text");

const words = [
    "reason.",
    "retrieve.",
    "act.",
    "use tools.",
    "solve problems."
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 55 : 95
    );

}

typeEffect();


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .experience-item, .cert-card, .featured-project, .education-card"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION SECTION
   ========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(
    ".nav-links a[href^='#']"
);


const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navigationLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },
    {
        threshold: 0.35
    }
);


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================================
   TERMINAL HOVER EFFECT
   ========================================================= */

const terminal = document.querySelector(".terminal-window");

if (terminal) {

    terminal.addEventListener("mousemove", (event) => {

        const rect = terminal.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 6;

        const rotateX =
            ((y / rect.height) - 0.5) * -6;

        terminal.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    terminal.addEventListener("mouseleave", () => {

        terminal.style.transform =
            "perspective(1000px) rotateY(-4deg)";

    });

}


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElement =
    document.querySelector("footer p");

if (yearElement) {

    yearElement.textContent =
        `© ${new Date().getFullYear()} Shaik Sahil Rizwan`;

}


/* =========================================================
   PAGE LOAD
   ========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


console.log(
    "%c👋 Hey! Welcome to Sahil's portfolio.",
    "color:#66f6a8;font-size:14px;font-weight:bold;"
);

console.log(
    "%cAI Engineer | GenAI | Agentic AI | MCP | RAG",
    "color:#929aa5;font-size:12px;"
);
