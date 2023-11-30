document.addEventListener("DOMContentLoaded", function () {
    // Function to add professional animations to the images using GSAP
    function professionalAnimation() {
        gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } })
            .from("#imageGallery img", { opacity: 0, scale: 0.8, x: -50, stagger: 0.2 })
            .to("#imageGallery img", { opacity: 1, scale: 1, x: 0, stagger: 0.2 });
    }

    // Call the function when the page is fully loaded
    professionalAnimation();
});
