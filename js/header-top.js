document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("customLoginModal");

    // Example: Print to console when the modal is shown
    loginModal.addEventListener("shown.bs.modal", function () {
        console.log("Login modal is now visible.");
    });
});
