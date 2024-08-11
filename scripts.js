document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    const formMessage = document.getElementById("form-message");
    const modal = document.getElementById("formMessageModal");
    const closeModal = document.getElementsByClassName("close")[0];

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            formMessage.innerHTML = "Thank you for your message! We will get back to you soon.";
            formMessage.style.color = "green";
            form.reset(); // Reset the form fields
        } else {
            formMessage.innerHTML = "Oops! There was a problem with your submission.";
            formMessage.style.color = "red";
        }
        modal.style.display = "block";
    }).catch(error => {
        formMessage.innerHTML = "Oops! There was a problem with your submission.";
        formMessage.style.color = "red";
        modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
