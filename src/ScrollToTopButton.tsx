import React, { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 200);
        };
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        setIsClicked(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        
        // Reset click animation after 600ms
        setTimeout(() => {
            setIsClicked(false);
        }, 600);
    };

    return (
        <button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
            style={{
                animation: visible ? 'float 3s ease-in-out infinite' : 'none'
            }}
            aria-label="Scroll to top"
            title="Back to top"
        >
            {/* Rotating ring effect */}
            <div className={`absolute inset-0 rounded-full border-2 border-white/30 transition-all duration-500 ${
                isHovered ? 'animate-spin' : ''
            }`}></div>
            
            {/* Second rotating ring */}
            <div className={`absolute inset-1 rounded-full border border-white/20 transition-all duration-700 ${
                isHovered ? 'animate-spin-reverse' : ''
            }`}></div>
            
            <div className="relative">
                {/* Main icon with multiple animations */}
                <i className={`fas fa-arrow-up text-2xl transition-all duration-300 ${
                    isHovered ? 'animate-bounce scale-110 rotate-12' : 'animate-pulse'
                } ${
                    isClicked ? 'animate-spin scale-125' : ''
                }`}></i>
                
                {/* Floating dots animation */}
                <div className={`absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full transition-all duration-300 ${
                    isHovered ? 'animate-ping opacity-100' : 'opacity-0'
                }`}></div>
                <div className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full transition-all duration-300 delay-100 ${
                    isHovered ? 'animate-ping opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Glow effect on hover */}
                {isHovered && (
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                )}
                
                {/* Continuous floating motion */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full transition-all duration-1000 ${
                    isHovered ? 'animate-pulse' : ''
                }`}></div>
            </div>
            
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-8px);
                    }
                }
                
                @keyframes spin-reverse {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(-360deg);
                    }
                }
            `}</style>
        </button>
    );
} 