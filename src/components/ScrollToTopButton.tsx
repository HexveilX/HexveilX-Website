import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-glow-lg z-50 group"
                    aria-label="Scroll to top"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                    }}
                >
                    <ButtonEffects />
                    <ButtonIcon />
                    <ButtonDecorations />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

function ButtonEffects() {
    return (
        <>
            <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
        </>
    );
}

function ButtonIcon() {
    return (
        <motion.i 
            className="fas fa-arrow-up text-white text-xl relative z-10"
            whileHover={{ 
                y: -2,
                scale: 1.2,
                textShadow: "0 0 10px rgba(255,255,255,0.8)"
            }}
        />
    );
}

function ButtonDecorations() {
    return (
        <motion.div 
            className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100"
            animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0, 1, 0]
            }}
            transition={{ 
                duration: 2, 
                repeat: Infinity 
            }}
        />
    );
}
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