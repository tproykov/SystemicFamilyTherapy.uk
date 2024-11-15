// main.js
document.addEventListener('DOMContentLoaded', function () {
    // Login button functionality
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            alert('Login functionality coming soon!');
        });
    }

    // Search button functionality
    const searchBtn = document.querySelector('.search-nav-item');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            alert('Search functionality coming soon!');
        });
    }

    // Book Consultation button functionality
    const bookingBtn = document.querySelector('.booking-btn');
    if (bookingBtn) {
        bookingBtn.addEventListener('click', function () {
            alert('Booking functionality coming soon!');
        });
    }

    // Download button functionality
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            // Trigger file download
            const link = document.createElement('a');
            link.href = '../files/ftsf_info_leaflet.pdf';
            link.download = 'ftsf_info_leaflet.pdf';
            link.click();
        });
    }

    // Download Survival Guide button functionality
    const downloadSurvivalBtn = document.querySelector('.sh-survival-guide-btn');
    if (downloadSurvivalBtn) {
        downloadSurvivalBtn.addEventListener('click', function () {
            // Trigger file download
            const link = document.createElement('a');
            link.href = '../files/sphc_survival_guide.pdf';
            link.download = 'sphc_survival_guide.pdf';
            link.click();
        });
    }

    // Download Survival Audio Guide button functionality
    const downloadSurvivalAudioBtn = document.querySelector('.sh-survival-guide-audio-btn');
    if (downloadSurvivalAudioBtn) {
        downloadSurvivalAudioBtn.addEventListener('click', function () {
            // Trigger file download
            const link = document.createElement('a');
            link.href = '../files/sphc_survival_guide_audio.mp3';
            link.download = 'sphc_survival_guide_audio.mp3';
            link.click();
        });
    }

    // Download How to Communicate with Your Child Guide functionality
    const downloadCommChildBtn = document.querySelector('.sh-comm-children-guide-btn');
    if (downloadCommChildBtn) {
        downloadCommChildBtn.addEventListener('click', function () {
            // Trigger file download
            const link = document.createElement('a');
            link.href = '../files/sphc_comm_children_guide.pdf';
            link.download = 'sphc_comm_children_guide.pdf';
            link.click();
        });
    }

    // Download How to Communicate with Your Child Audio Guide functionality
    const downloadCommChildAudioBtn = document.querySelector('.sh-comm-children-guide-audio-btn');
    if (downloadCommChildAudioBtn) {
        downloadCommChildAudioBtn.addEventListener('click', function () {
            // Trigger file download
            const link = document.createElement('a');
            link.href = '../files/sphc_comm_children_guide_audio.mp3';
            link.download = 'sphc_comm_children_guide_audio.mp3';
            link.click();
        });
    }

    // Download How to Support Contact Guide functionality
    const downloadSuppChildBtn = document.querySelector('.sh-supporting-children-have-contact-btn');
    if (downloadSuppChildBtn) {
        downloadSuppChildBtn.addEventListener('click', function () {
            // Trigger file download
            const link = document.createElement('a');
            link.href = '../files/sphc_supporting_contact.pdf';
            link.download = 'sphc_supporting_contact.pdf';
            link.click();
        });
    }

    // Download How to Support Contact Audio Guide functionality
    const downloadSuppChildAudioBtn = document.querySelector('.sh-supporting-children-have-contact-audio-btn');
    if (downloadSuppChildAudioBtn) {
        downloadSuppChildAudioBtn.addEventListener('click', function () {
            // Trigger file download
            const link = document.createElement('a');
            link.href = '../files/sphc_supporting_contact_audio.mp3';
            link.download = 'sphc_supporting_contact_audio.mp3';
            link.click();
        });
    }

    // Download worksheet button functionality
    const downloadWorksheetBtn = document.querySelector('.sh-worksheet-btn');
    if (downloadWorksheetBtn) {
        downloadWorksheetBtn.addEventListener('click', function () {
            alert('Download worksheet functionality coming soon!');
        });
    }

    // Download template button functionality
    const downloadTemplateBtn = document.querySelector('.sh-template-btn');
    if (downloadTemplateBtn) {
        downloadTemplateBtn.addEventListener('click', function () {
            alert('Download template functionality coming soon!');
        });
    }

    // Download guide 1 button functionality
    const downloadGuide1Btn = document.querySelector('.sh-guide1-btn');
    if (downloadGuide1Btn) {
        downloadGuide1Btn.addEventListener('click', function () {
            alert('Download guide functionality coming soon!');
        });
    }

    // Download guide 2 button functionality
    const downloadGuide2Btn = document.querySelector('.sh-guide2-btn');
    if (downloadGuide2Btn) {
        downloadGuide2Btn.addEventListener('click', function () {
            alert('Download guide functionality coming soon!');
        });
    }

    // Add active state to current navigation item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === '#')) {
            link.style.color = '#8ec545';
        }
    }); // Close the forEach method

    // HAMBURGER BUTTON FUNCTIONALITY --------------------------------------------------------
    // JavaScript to toggle the menu
    document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector("header nav ul");

        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    });


}); // Close the DOMContentLoaded event (Starts from the start)
