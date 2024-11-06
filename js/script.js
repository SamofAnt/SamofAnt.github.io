const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        let isValid = true;

        if (!firstName.value.trim()) {
            alert("Please enter your first name.");
            firstName.focus();
            isValid = false;
        } else if (!lastName.value.trim()) {
            alert("Please enter your last name.");
            lastName.focus();
            isValid = false;
        }
        else if (!validateEmail(email.value.trim())) {
            alert("Please enter a valid email address.");
            email.focus();
            isValid = false;
        }

        else if (!message.value.trim()) {
            alert("Please enter your message.");
            message.focus();
            isValid = false;
        }

        if (isValid) {
            showSuccessNotification("Thank you! Your message has been sent successfully.");
            contactForm.reset();
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showSuccessNotification(message) {
        const notification = document.createElement("div");
        notification.classList.add("submission-notification");
        notification.textContent = message;

        notification.style.position = "fixed";
        notification.style.bottom = "20px";
        notification.style.right = "20px";
        notification.style.padding = "10px 20px";
        notification.style.backgroundColor = "#4CAF50";
        notification.style.color = "#fff";
        notification.style.borderRadius = "5px";
        notification.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
        notification.style.zIndex = "1000";

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
});
