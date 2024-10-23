const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href').substring(1); // Get the id from href, removing the #
        
        if (linkHref === current) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent immediate submission

        // Fetch API call to submit form
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => response.json())
        .then(result => {
            if(result.success) {
                // Show success alert after submission
                alert('Message sent successfully!');
                form.reset(); // Reset form fields
            } else {
                // Show error alert if something goes wrong
                alert('Failed to send the message. Please try again.');
            }
        })
        .catch(error => {
            alert('There was an error submitting the form.');
        });
    });
});