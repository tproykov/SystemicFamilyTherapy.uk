// Constants and configurations
const CONFIG = {
    MESSAGES: {
        COMING_SOON: 'This functionality is coming soon!',
        DOWNLOAD_ERROR: 'Error downloading file. Please try again.',
    },
    BUTTON_TEXT: {
        PLAY: 'Play Audio',
        PAUSE: 'Pause Audio'
    },
    SELECTORS: {
        HAMBURGER: '.hamburger',
        NAV_MENU: '#main-nav',
        NAV_LINKS: '.nav-link',
        AUDIO_PLAYERS: '.audio-player',
        COMING_SOON_BUTTONS: {
            LOGIN: '.login-btn',
            SEARCH: '.search-nav-item',
            BOOKING: '.booking-btn',
            WORKSHEET: '.sh-worksheet-btn'
        }
    },
    PDF_DOWNLOADS: [
        {
            selector: '.download-btn',
            path: '../files/ftsf_info_leaflet.pdf',
            filename: 'ftsf_info_leaflet.pdf'
        },
        {
            selector: '.sh-survival-guide-btn',
            path: '../files/sphc_survival_guide.pdf',
            filename: 'sphc_survival_guide.pdf'
        },
        {
            selector: '.sh-comm-children-guide-btn',
            path: '../files/sphc_comm_children_guide.pdf',
            filename: 'sphc_comm_children_guide.pdf'
        },
        {
            selector: '.sh-supporting-children-have-contact-btn',
            path: '../files/sphc_supporting_contact.pdf',
            filename: 'sphc_supporting_contact.pdf'
        },
        {
            selector: '.sh-supporting-children-see-you-btn',
            path: '../files/sphc_supporting_children_see_you.pdf',
            filename: 'sphc_supporting_children_see_you.pdf'
        },
        {
            selector: '.sh-meeting-with-your-ex-btn',
            path: '../files/sphc_meeting_with_your_ex.pdf',
            filename: 'sphc_meeting_with_your_ex.pdf'
        },
        {
            selector: '.sh-communication-book-btn',
            path: '../files/sphc_communication_book.pdf',
            filename: 'sphc_communication_book.pdf'
        }
    ],
    AUDIO_PLAYERS: [
        {
            buttonSelector: '.sh-survival-guide-audio-btn',
            playerSelector: '#survival-guide-player',
            audioPath: '../files/sphc_survival_guide_audio.mp3'
        },
        {
            buttonSelector: '.sh-comm-children-guide-audio-btn',
            playerSelector: '#comm-children-player',
            audioPath: '../files/sphc_comm_children_guide_audio.mp3'
        },
        {
            buttonSelector: '.sh-supporting-children-have-contact-audio-btn',
            playerSelector: '#supporting-contact-player',
            audioPath: '../files/sphc_supporting_contact_audio.mp3'
        },
        {
            buttonSelector: '.sh-supporting-children-see-you-audio-btn',
            playerSelector: '#supporting-see-you-player',
            audioPath: '../files/sphc_supporting_children_see_you_audio.mp3'
        },
        {
            buttonSelector: '.sh-meeting-with-your-ex-audio-btn',
            playerSelector: '#meeting-your-ex-player',
            audioPath: '../files/sphc_meeting_with_your_ex_audio.mp3'
        },
        {
            buttonSelector: '.sh-communication-book-audio-btn',
            playerSelector: '#communication-book-player',
            audioPath: '../files/sphc_communication_book_audio.mp3'
        }
    ]
};

// Utility functions
const utils = {
    /**
     * Safely query DOM element
     * @param {string} selector - CSS selector
     * @param {Element} [context=document] - Context to search within
     * @returns {Element|null}
     */
    $(selector, context = document) {
        return context.querySelector(selector);
    },

    /**
     * Safely query all DOM elements
     * @param {string} selector - CSS selector
     * @param {Element} [context=document] - Context to search within
     * @returns {Element[]}
     */
    $$(selector, context = document) {
        return Array.from(context.querySelectorAll(selector));
    },

    /**
     * Safe event listener addition
     * @param {Element} element - DOM element
     * @param {string} event - Event name
     * @param {Function} handler - Event handler
     */
    addEvent(element, event, handler) {
        if (element) {
            element.addEventListener(event, handler);
        }
    }
};

class NavigationManager {
    constructor() {
        console.log('NavigationManager initializing...');
        this.hamburger = document.querySelector('.hamburger');
        this.nav = document.querySelector('header nav');

        console.log('Hamburger element:', this.hamburger);
        console.log('Nav element:', this.nav);

        if (this.hamburger && this.nav) {
            console.log('Adding event listeners...');
            // Bind the methods to the class instance
            this.toggleMenu = this.toggleMenu.bind(this);
            this.handleClickOutside = this.handleClickOutside.bind(this);

            // Add event listeners
            this.hamburger.addEventListener('click', this.toggleMenu);
            document.addEventListener('click', this.handleClickOutside);
        }
    }

    toggleMenu(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        console.log('Toggling menu');
        this.nav.classList.toggle('show');
        const isExpanded = this.nav.classList.contains('show');
        this.hamburger.setAttribute('aria-expanded', isExpanded);
    }

    handleClickOutside(e) {
        if (this.nav.classList.contains('show') &&
            !this.hamburger.contains(e.target) &&
            !this.nav.contains(e.target)) {
            this.toggleMenu();
        }
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM loaded, initializing NavigationManager');
        new NavigationManager();
    });
} else {
    console.log('DOM already loaded, initializing NavigationManager');
    new NavigationManager();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NavigationManager();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new NavigationManager();
});

toggleMenu()
{
    this.isMenuOpen = !this.isMenuOpen;
    this.hamburger.setAttribute('aria-expanded', String(this.isMenuOpen));
    this.navMenu.classList.toggle('show');

    // Force a reflow to ensure the menu shows
    window.getComputedStyle(this.navMenu).display;
}

closeMenu()
{
    this.isMenuOpen = false;
    this.hamburger.setAttribute('aria-expanded', 'false');
    this.navMenu.classList.remove('show');
}


// Audio Player Manager
class AudioPlayerManager {
    constructor() {
        this.players = new Map();
        this.currentlyPlaying = null;
        this.init();
    }

    init() {
        CONFIG.AUDIO_PLAYERS.forEach(config => {
            const button = utils.$(config.buttonSelector);
            const player = utils.$(config.playerSelector);

            if (button && player) {
                this.players.set(config.playerSelector, { button, player, audio: player.querySelector('audio') });
                utils.addEvent(button, 'click', () => this.togglePlayer(config.playerSelector));
            }
        });
    }

    togglePlayer(playerSelector) {
        const playerData = this.players.get(playerSelector);
        if (!playerData) return;

        const { button, player, audio } = playerData;

        // Hide all other players and stop their audio
        this.players.forEach((data, key) => {
            if (key !== playerSelector) {
                data.player.classList.remove('show');
                data.audio?.pause();
                data.button.textContent = CONFIG.BUTTON_TEXT.PLAY;
                data.button.setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle current player
        const isVisible = player.classList.contains('show');
        player.classList.toggle('show');

        if (audio) {
            if (!isVisible) {
                audio.play()
                    .then(() => {
                        button.textContent = CONFIG.BUTTON_TEXT.PAUSE;
                        button.setAttribute('aria-expanded', 'true');
                    })
                    .catch(error => {
                        console.error('Audio playback failed:', error);
                        button.textContent = CONFIG.BUTTON_TEXT.PLAY;
                        button.setAttribute('aria-expanded', 'false');
                    });
            } else {
                audio.pause();
                button.textContent = CONFIG.BUTTON_TEXT.PLAY;
                button.setAttribute('aria-expanded', 'false');
            }
        }
    }
}

// Download Manager
class DownloadManager {
    constructor() {
        this.init();
    }

    init() {
        CONFIG.PDF_DOWNLOADS.forEach(config => {
            const button = utils.$(config.selector);
            if (button) {
                utils.addEvent(button, 'click', () => this.handleDownload(config.path, config.filename));
            }
        });
    }

    handleDownload(filePath, fileName) {
        try {
            const link = document.createElement('a');
            link.href = filePath;
            link.download = fileName;
            link.click();

            // Track download if Google Analytics is available
            if (typeof gtag === 'function') {
                gtag('event', 'download', {
                    'event_category': 'Resource',
                    'event_label': fileName
                });
            }
        } catch (error) {
            console.error('Download error:', error);
            alert(CONFIG.MESSAGES.DOWNLOAD_ERROR);
        }
    }
}

// Coming Soon Features Manager
class ComingSoonManager {
    constructor() {
        this.init();
    }

    init() {
        Object.values(CONFIG.SELECTORS.COMING_SOON_BUTTONS).forEach(selector => {
            const button = utils.$(selector);
            if (button) {
                utils.addEvent(button, 'click', () => this.handleComingSoonFeature(selector));
            }
        });
    }

    handleComingSoonFeature(selector) {
        alert(CONFIG.MESSAGES.COMING_SOON);

        // Track interaction if Google Analytics is available
        if (typeof gtag === 'function') {
            gtag('event', 'coming_soon_click', {
                'event_category': 'User Interaction',
                'event_label': selector
            });
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NavigationManager();
    new AudioPlayerManager();
    new DownloadManager();
    new ComingSoonManager();
});