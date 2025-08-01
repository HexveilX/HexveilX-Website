import { useState, useEffect } from "react";
import logo from "../assets/wallpaperflare.com_wallpaper.webp";

interface NavLink {
    href: string;
    label: string;
    icon: string;
}

const navLinks: NavLink[] = [
    { href: "#home", label: "Home", icon: "fas fa-home" },
    { href: "#skills", label: "Skills", icon: "fas fa-code" },
    { href: "#projects", label: "Projects", icon: "fas fa-project-diagram" },
    { href: "#contact", label: "Contact", icon: "fas fa-envelope" },
];

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveLink(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full bg-dark/70 backdrop-blur-lg z-50 border-b border-primary/20 shadow-lg animate-fade-in">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                <DesktopNavigation activeLink={activeLink} />
                <MobileMenuButton onClick={() => setDrawerOpen(true)} />
            </nav>
            
            <MobileDrawer 
                isOpen={drawerOpen} 
                onClose={() => setDrawerOpen(false)} 
                activeLink={activeLink} 
            />
        </header>
    );
}

function Logo() {
    return (
        <a href="/" className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 text-white font-semibold hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-primary/20 overflow-hidden group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="w-9 h-9 object-cover rounded-full group-hover:scale-110 transition-transform duration-300" 
                />
            </span>
            <span className="text-lg font-bold text-dark group-hover:text-primary transition-colors duration-300">
                HexveilX
            </span>
        </a>
    );
}

function DesktopNavigation({ activeLink }: { activeLink: string }) {
    return (
        <div className="hidden md:flex space-x-8 text-white font-medium">
            {navLinks.map(link => (
                <a
                    key={link.href}
                    href={link.href}
                    className={`relative transition-colors duration-300 group ${
                        activeLink === link.href.substring(1) ? 'text-primary' : 'hover:text-primary'
                    }`}
                >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        activeLink === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
            ))}
        </div>
    );
}

function MobileMenuButton({ onClick }: { onClick: () => void }) {
    return (
        <div className="md:hidden">
            <button 
                className="relative w-12 h-12 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300 group shadow-glow" 
                onClick={onClick} 
                aria-label="Open menu"
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className="fas fa-bars text-xl relative z-10 group-hover:animate-bounce-gentle"></i>
            </button>
        </div>
    );
}

function MobileDrawer({ isOpen, onClose, activeLink }: { 
    isOpen: boolean; 
    onClose: () => void; 
    activeLink: string; 
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-fade-in" onClick={onClose}></div>
            
            <div className="ml-auto w-80 max-w-[85vw] h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-2xl border-l border-primary/30 flex flex-col p-8 animate-slide-in-right relative">
                <DrawerHeader onClose={onClose} />
                <DrawerNavigation activeLink={activeLink} onClose={onClose} />
                <DrawerFooter />
            </div>
        </div>
    );
}

function DrawerHeader({ onClose }: { onClose: () => void }) {
    return (
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-primary/20">
            <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary shadow-glow">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="w-10 h-10 object-cover rounded-full" 
                    />
                </span>
                <span className="text-xl font-bold gradient-text-primary">HexveilX</span>
            </div>
            <button 
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-glow" 
                onClick={onClose} 
                aria-label="Close menu"
            >
                <i className="fas fa-times text-lg"></i>
            </button>
        </div>
    );
}

function DrawerNavigation({ activeLink, onClose }: { activeLink: string; onClose: () => void }) {
    return (
        <nav className="flex flex-col gap-4 flex-1">
            {navLinks.map((link, index) => (
                <a
                    key={link.href}
                    href={link.href}
                    className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                        activeLink === link.href.substring(1) 
                            ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary shadow-glow' 
                            : 'bg-slate-700/50 border border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-primary/30 hover:text-primary'
                    }`}
                    onClick={onClose}
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeLink === link.href.substring(1) 
                            ? 'bg-primary text-white shadow-glow' 
                            : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                    }`}>
                        <i className={`${link.icon} text-lg`}></i>
                    </div>
                    <span className="text-lg font-semibold">{link.label}</span>
                    {activeLink === link.href.substring(1) && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
                    )}
                </a>
            ))}
        </nav>
    );
}

function DrawerFooter() {
    return (
        <div className="pt-6 border-t border-primary/20">
            <div className="text-center text-gray-400 text-sm">
                <p className="mb-2">Built with ❤️</p>
                <div className="flex justify-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">React</span>
                    <span className="px-2 py-1 rounded-full bg-secondary/10 text-secondary">Convex</span>
                </div>
            </div>
        </div>
    );
}