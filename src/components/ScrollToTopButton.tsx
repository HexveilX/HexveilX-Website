import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

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
            className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-gentle-pulse hover:animate-gentle-glow relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            aria-label="Scroll to top"
            title="Back to top"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-subtle-float group-hover:animate-soft-pulse"></div>
            <i className="fas fa-arrow-up text-2xl transition-transform duration-300 hover:scale-110" />
        </button>
    );
}
