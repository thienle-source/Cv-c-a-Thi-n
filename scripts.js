// Open modal
function openModal() {
    document.getElementById('contact-modal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('contact-modal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('contact-modal')) {
        closeModal();
    }
}

// Set progress bar width for skills
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const skillLevel = bar.getAttribute('data-skill');
        bar.style.width = skillLevel + '%';
    });
});
