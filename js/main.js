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

// Navigation Manager
class NavigationManager {
    constructor() {
        this.hamburger = utils.$(CONFIG.SELECTORS.HAMBURGER);
        this.navMenu = utils.$(CONFIG.SELECTORS.NAV_MENU);
        this.navLinks = utils.$$(CONFIG.SELECTORS.NAV_LINKS);
        this.isMenuOpen = false;

        this.init();
    }

    init() {
        utils.addEvent(this.hamburger, 'click', () => this.toggleMenu());

        this.navLinks.forEach(link => {
            utils.addEvent(link, 'click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        utils.addEvent(document, 'click', (event) => {
            if (this.isMenuOpen &&
                !event.target.closest(CONFIG.SELECTORS.HAMBURGER) &&
                !event.target.closest(CONFIG.SELECTORS.NAV_MENU)) {
                this.closeMenu();
            }
        });

        // Handle keyboard navigation
        utils.addEvent(document, 'keydown', (event) => {
            if (event.key === 'Escape' && this.isMenuOpen) {
                this.closeMenu();
                this.hamburger?.focus();
            }
        });
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.hamburger?.setAttribute('aria-expanded', this.isMenuOpen);
        this.navMenu?.classList.toggle('show');
    }

    closeMenu() {
        this.isMenuOpen = false;
        this.hamburger?.setAttribute('aria-expanded', 'false');
        this.navMenu?.classList.remove('show');
    }
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
        const isVisible = player.style.display !== 'none';

        // Stop all other players
        this.players.forEach((data, key) => {
            if (key !== playerSelector) {
                data.player.style.display = 'none';
                data.audio?.pause();
                data.button.textContent = CONFIG.BUTTON_TEXT.PLAY;
                data.button.setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle current player
        player.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? CONFIG.BUTTON_TEXT.PLAY : CONFIG.BUTTON_TEXT.PAUSE;
        button.setAttribute('aria-expanded', !isVisible);

        if (audio) {
            isVisible ? audio.pause() : audio.play();
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