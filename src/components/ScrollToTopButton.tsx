import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-glow-lg hover:shadow-glow-xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 group animate-fade-in"
            aria-label="Scroll to top"
        >
            <ButtonEffects />
            <ButtonIcon />
            <ButtonDecorations />
        </button>
    );
}

function ButtonEffects() {
    return (
        <>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
        </>
    );
}

function ButtonIcon() {
    return (
        <i className="fas fa-arrow-up text-white text-xl relative z-10 group-hover:animate-bounce-gentle group-hover:text-2xl transition-all duration-300"></i>
    );
}

function ButtonDecorations() {
    return (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-pulse-glow"></div>
    );
}