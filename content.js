(() => {
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function initCommentControl() {
        if (!window.location.pathname.includes('/watch')) return;

        let isInitialized = false;
        let commentsLoaded = false;

        function findCommentsSection() {
            return document.querySelector('ytd-comments#comments');
        }

        function createButton(isLoaded = false) {
            const button = document.createElement('button');
            button.textContent = isLoaded ? 'Hide Comments' : 'Load Comments';
            button.className = 'custom-load-comments-btn';
            return button;
        }

        function initialize() {
            if (isInitialized) return;

            const commentsSection = findCommentsSection();
            if (!commentsSection) return;

            const commentsContainer = commentsSection.querySelector('#sections');
            if (!commentsContainer) return;

            const existingButton = document.querySelector('.custom-load-comments-btn');
            if (existingButton) existingButton.remove();

            function toggleComments(button) {
                if (commentsLoaded) {
                    commentsContainer.classList.add('comments-hidden');
                    button.textContent = 'Load Comments';
                    commentsLoaded = false;
                } else {
                    commentsContainer.classList.remove('comments-hidden');
                    commentsContainer.style.display = '';
                    button.textContent = 'Hide Comments';
                    commentsLoaded = true;
                }
            }

            if (!commentsLoaded) {
                commentsContainer.classList.add('comments-hidden');
            }
            
            const button = createButton(commentsLoaded);
            commentsSection.parentElement.insertBefore(button, commentsSection);
            
            button.addEventListener('click', () => {
                toggleComments(button);
            });

            isInitialized = true;
        }

        initialize();

        for (let i = 0; i < 10; i++) {
            setTimeout(initialize, i * 100);
        }

        for (let i = 0; i < 8; i++) {
            setTimeout(initialize, 1000 + (i * 250));
        }

        const debouncedInit = debounce(() => {
            if (!isInitialized) {
                initialize();
            }
        }, 500);

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.addedNodes.length) {
                    initialize();
                }
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    initCommentControl();

    document.addEventListener('yt-navigate-finish', () => {
        initCommentControl();
    });
})();