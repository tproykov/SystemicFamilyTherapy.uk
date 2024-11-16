document.addEventListener('DOMContentLoaded', function () {
    // Function to handle file downloads
    function handleFileDownload(selector, filePath, fileName) {
        const downloadBtn = document.querySelector(selector);
        if (downloadBtn) {
            downloadBtn.addEventListener('click', function () {
                // Trigger file download
                const link = document.createElement('a');
                link.href = filePath;
                link.download = fileName;
                link.click();
            });
        }
    }

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('header nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    }

    // Function to handle audio players
    function handleAudioPlayer(buttonSelector, playerSelector, audioPath) {
        const audioBtn = document.querySelector(buttonSelector);
        const audioPlayer = document.querySelector(playerSelector);

        if (audioBtn && audioPlayer) {
            audioBtn.addEventListener('click', function() {
                const audio = audioPlayer.querySelector('audio');

                // Toggle player visibility
                if (audioPlayer.style.display === 'none') {
                    // Hide all other players first
                    document.querySelectorAll('.audio-player').forEach(player => {
                        player.style.display = 'none';
                        const playerAudio = player.querySelector('audio');
                        if (playerAudio) {
                            playerAudio.pause();
                        }
                    });

                    // Show and play this player
                    audioPlayer.style.display = 'block';
                    if (audio) {
                        audio.play();
                    }
                    audioBtn.textContent = 'Pause Audio';
                } else {
                    // Hide and pause this player
                    audioPlayer.style.display = 'none';
                    if (audio) {
                        audio.pause();
                    }
                    audioBtn.textContent = 'Play Audio';
                }
            });
        }
    }

    // Initialize audio players
    handleAudioPlayer(
        '.sh-survival-guide-audio-btn',
        '#survival-guide-player',
        '../files/sphc_survival_guide_audio.mp3'
    );

    handleAudioPlayer(
        '.sh-comm-children-guide-audio-btn',
        '#comm-children-player',
        '../files/sphc_comm_children_guide_audio.mp3'
    );

    handleAudioPlayer(
        '.sh-supporting-children-have-contact-audio-btn',
        '#supporting-contact-player',
        '../files/sphc_supporting_contact_audio.mp3'
    );

    handleAudioPlayer(
        '.sh-supporting-children-see-you-audio-btn',
        '#supporting-see-you-player',
        '../files/sphc_supporting_children_see_you_audio.mp3'
    );

    handleAudioPlayer(
        '.sh-meeting-with-your-ex-audio-btn',
        '#meeting-your-ex-player',
        '../files/sphc_meeting_with_your_ex_audio.mp3'
    );


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
    handleFileDownload('.download-btn', '../files/ftsf_info_leaflet.pdf', 'ftsf_info_leaflet.pdf');

    // Download Survival Guide button functionality
    handleFileDownload('.sh-survival-guide-btn', '../files/sphc_survival_guide.pdf', 'sphc_survival_guide.pdf');

    // Download Survival Audio Guide button functionality
    // handleFileDownload('.sh-survival-guide-audio-btn', '../files/sphc_survival_guide_audio.mp3', 'sphc_survival_guide_audio.mp3');

    // Download How to Communicate with Your Child Guide functionality
    handleFileDownload('.sh-comm-children-guide-btn', '../files/sphc_comm_children_guide.pdf', 'sphc_comm_children_guide.pdf');

    // Download How to Communicate with Your Child Audio Guide functionality
    // handleFileDownload('.sh-comm-children-guide-audio-btn', '../files/sphc_comm_children_guide_audio.mp3', 'sphc_comm_children_guide_audio.mp3');

    // Download How to Support Contact Guide functionality
    handleFileDownload('.sh-supporting-children-have-contact-btn', '../files/sphc_supporting_contact.pdf', 'sphc_supporting_contact.pdf');

    // Download How to Support Contact Audio Guide functionality
    // handleFileDownload('.sh-supporting-children-have-contact-audio-btn', '../files/sphc_supporting_contact_audio.mp3', 'sphc_supporting_contact_audio.mp3');

    // Download What if Your Child Does Not Want to See You Guide functionality
    handleFileDownload('.sh-supporting-children-see-you-btn', '../files/sphc_supporting_children_see_you.pdf', 'sphc_supporting_children_see_you.pdf');

    // Download What if Your Child Does Not Want to See You Audio Guide functionality
    // handleFileDownload('.sh-supporting-children-see-you-audio-btn', '../files/sphc_supporting_children_see_you_audio.mp3', 'sphc_supporting_children_see_you_audio.mp3');

    // Download How to Hold a Constructive Meeting with Your Ex Guide functionality
    handleFileDownload('.sh-meeting-with-your-ex-btn', '../files/sphc_meeting_with_your_ex.pdf', 'sphc_meeting_with_your_ex.pdf');

    // Download How to Use a Communication Book in Co-Parenting Guide functionality
    handleFileDownload('.sh-communication-book-btn', '../files/sphc_communication_book.pdf', 'sphc_communication_book.pdf');

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
    });

    // HAMBURGER BUTTON FUNCTIONALITY --------------------------------------------------------
    // JavaScript to toggle the menu
    // const hamburger = document.querySelector(".hamburger");
    // const navMenu = document.querySelector("header nav ul");
    //
    // hamburger.addEventListener("click", () => {
    //     navMenu.classList.toggle("show");
    // });
});