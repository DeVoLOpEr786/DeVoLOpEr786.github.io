/* =========================================================
   SAHIL RIZWAN — WINDOWS 7 PROJECT DESKTOP JS
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const projectsWindow =
    document.getElementById("projectsWindow");

const startMenu =
    document.getElementById("startMenu");

const projectGrid =
    document.getElementById("projectGrid");

const projectCount =
    document.getElementById("projectCount");

const statusText =
    document.getElementById("statusText");

const clock =
    document.getElementById("clock");


/* =========================================================
   Z-INDEX / WINDOW MANAGEMENT
   ========================================================= */

let currentZIndex = 50;


function bringToFront(element) {

    if (!element) return;

    currentZIndex++;

    element.style.zIndex = currentZIndex;

}


/* Make windows clickable and bring them forward */

document.querySelectorAll(".window").forEach(windowElement => {

    windowElement.addEventListener("mousedown", () => {

        bringToFront(windowElement);

    });

});


/* =========================================================
   PROJECT WINDOWS
   ========================================================= */

function openProject(projectId) {

    const project =
        document.getElementById(projectId);

    if (!project) return;

    project.style.display = "block";

    project.classList.remove("minimized");

    bringToFront(project);

}


function closeProject(projectId) {

    const project =
        document.getElementById(projectId);

    if (!project) return;

    project.style.display = "none";

}


/* =========================================================
   ABOUT WINDOW
   ========================================================= */

function openAbout() {

    const aboutWindow =
        document.getElementById("aboutWindow");

    if (!aboutWindow) return;

    aboutWindow.style.display = "block";

    bringToFront(aboutWindow);

}


function closeAbout() {

    const aboutWindow =
        document.getElementById("aboutWindow");

    if (!aboutWindow) return;

    aboutWindow.style.display = "none";

}


/* =========================================================
   MAIN PROJECT WINDOW
   ========================================================= */

function closeProjects() {

    if (!projectsWindow) return;

    projectsWindow.style.display = "none";

}


function restoreProjects() {

    if (!projectsWindow) return;

    projectsWindow.style.display = "block";

    projectsWindow.classList.remove("minimized");

    bringToFront(projectsWindow);

}


function minimizeProjects() {

    if (!projectsWindow) return;

    projectsWindow.classList.add("minimized");

}


function toggleMaximize() {

    if (!projectsWindow) return;

    projectsWindow.classList.toggle("maximized");

}


/* =========================================================
   HOME
   ========================================================= */

function goHome() {

    window.location.href = "index.html";

}


/* =========================================================
   PROJECT FILTERING
   ========================================================= */

function filterProjects(category) {

    const projects =
        document.querySelectorAll(".project-item");

    const sidebarLinks =
        document.querySelectorAll(".sidebar-link");

    let visibleCount = 0;


    /* Update sidebar selection */

    sidebarLinks.forEach(link => {

        link.classList.remove("active");

    });


    /* Find clicked button */

    sidebarLinks.forEach(link => {

        const text =
            link.textContent
                .toLowerCase();

        if (
            category === "all" &&
            text.includes("all projects")
        ) {

            link.classList.add("active");

        }

        if (
            category === "ai" &&
            text.includes("ai")
        ) {

            link.classList.add("active");

        }

        if (
            category === "mcp" &&
            text.includes("mcp")
        ) {

            link.classList.add("active");

        }

        if (
            category === "rag" &&
            text.includes("rag")
        ) {

            link.classList.add("active");

        }

        if (
            category === "backend" &&
            text.includes("backend")
        ) {

            link.classList.add("active");

        }

    });


    /* Filter projects */

    projects.forEach(project => {

        const categories =
            project.dataset.category || "";

        const matches =
            category === "all" ||
            categories
                .split(" ")
                .includes(category);


        if (matches) {

            project.style.display = "flex";

            visibleCount++;

        } else {

            project.style.display = "none";

        }

    });


    updateProjectCount(visibleCount);

}


/* =========================================================
   SHOW ALL PROJECTS
   ========================================================= */

function showAllProjects() {

    filterProjects("all");

}


/* =========================================================
   PROJECT COUNT
   ========================================================= */

function updateProjectCount(count) {

    const label =
        count === 1
            ? "1 project"
            : `${count} projects`;


    if (projectCount) {

        projectCount.textContent =
            label;

    }


    if (statusText) {

        statusText.textContent =
            label;

    }

}


/* =========================================================
   START MENU
   ========================================================= */

function toggleStartMenu() {

    if (!startMenu) return;

    const isVisible =
        startMenu.style.display === "block";


    startMenu.style.display =
        isVisible
            ? "none"
            : "block";

}


/* Close Start Menu when clicking elsewhere */

document.addEventListener("click", event => {

    if (!startMenu) return;

    const startButton =
        document.querySelector(".start-button");


    if (
        startMenu.style.display === "block" &&
        !startMenu.contains(event.target) &&
        !startButton.contains(event.target)
    ) {

        startMenu.style.display = "none";

    }

});


/* =========================================================
   WINDOWS 7 CLOCK
   ========================================================= */

function updateClock() {

    if (!clock) return;


    const now =
        new Date();


    let hours =
        now.getHours();

    const minutes =
        now.getMinutes();

    const seconds =
        now.getSeconds();


    const period =
        hours >= 12
            ? "PM"
            : "AM";


    hours =
        hours % 12 || 12;


    const formattedMinutes =
        String(minutes).padStart(2, "0");


    clock.textContent =
        `${hours}:${formattedMinutes} ${period}`;

}


updateClock();

setInterval(updateClock, 1000);


/* =========================================================
   DOUBLE CLICK PROJECT
   ========================================================= */

document.querySelectorAll(".project-item").forEach(project => {

    project.addEventListener("dblclick", () => {

        const onclickValue =
            project.getAttribute("onclick");


        if (!onclickValue) return;


        const match =
            onclickValue.match(
                /openProject\(['"](.+?)['"]\)/
            );


        if (match) {

            openProject(match[1]);

        }

    });

});


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;


    /* Close Start menu */

    if (startMenu) {

        startMenu.style.display = "none";

    }


    /* Close project detail windows */

    document
        .querySelectorAll(".detail-window")
        .forEach(windowElement => {

            windowElement.style.display = "none";

        });


    /* Close about */

    const aboutWindow =
        document.getElementById("aboutWindow");

    if (aboutWindow) {

        aboutWindow.style.display = "none";

    }

});


/* =========================================================
   INITIAL STATE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* Hide all detail windows */

    document
        .querySelectorAll(".detail-window")
        .forEach(windowElement => {

            windowElement.style.display = "none";

        });


    /* Hide about window */

    const aboutWindow =
        document.getElementById("aboutWindow");

    if (aboutWindow) {

        aboutWindow.style.display = "none";

    }


    /* Make sure project window is visible */

    if (projectsWindow) {

        projectsWindow.style.display = "block";

    }


    /* Initial project count */

    const projects =
        document.querySelectorAll(".project-item");

    updateProjectCount(projects.length);

});


/* =========================================================
   CONSOLE EASTER EGG
   ========================================================= */

console.log(
    "%cWindows 7 Portfolio",
    "font-size:18px;font-weight:bold;color:#1674c8;"
);

console.log(
    "%cShaik Sahil Rizwan — AI Engineer",
    "font-size:12px;color:#328d52;"
);

console.log(
    "%cGenAI • Agentic AI • MCP • RAG • FastAPI",
    "font-size:11px;color:#64727f;"
);
