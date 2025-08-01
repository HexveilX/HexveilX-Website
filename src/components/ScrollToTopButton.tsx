import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Initial check
        toggleVisibility();

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            aria-label="Scroll to top"
            title="Back to top"
        >
            <i className={`fas fa-arrow-up text-2xl transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
        </button>
    );
}
