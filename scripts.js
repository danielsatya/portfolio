
// Add an event listener for scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector(".sticky-header");
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});





// Initialize Particles.js
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff", // Customize particle color
        },
        shape: {
            type: "circle", // Customize particle shape (circle, edge, triangle, etc.)
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0,
                sync: false,
            },
        },
        size: {
            value: 3, // Customize particle size
            random: true,
        },
        move: {
            enable: true,
            speed: 2, // Customize particle speed
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            repulse: {
                distance: 100, // Customize repulse distance
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});


document.addEventListener("DOMContentLoaded", function () {
    // Create a ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Animation for the "About" section
    var aboutAnimation = new TimelineMax()
        .from("#about", { opacity: 0, y: 150, duration: 1 });

    // Scene for the "About" section
    new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: 0.8,
        reverse: false, // Keep the animation active even when scrolling up
    })
        .setTween(aboutAnimation)
        .addTo(controller);

    // Animation for the "Skills" section
    var skillsAnimation = new TimelineMax()
        .from("#skills", { opacity: 0, y: 200, duration: 1 });

    // Scene for the "Skills" section
    new ScrollMagic.Scene({
        triggerElement: "#skills",
        triggerHook: 0.8,
        reverse: false,
    })
        .setTween(skillsAnimation)
        .addTo(controller);

    // Animation for the "Projects" section
    var projectsAnimation = new TimelineMax()
        .from("#projects", { opacity: 0, y: 400, duration: 1 });

    // Scene for the "Projects" section
    new ScrollMagic.Scene({
        triggerElement: "#projects",
        triggerHook: 0.8,
        reverse: false,
    })
        .setTween(projectsAnimation)
        .addTo(controller);
});


AOS.init();