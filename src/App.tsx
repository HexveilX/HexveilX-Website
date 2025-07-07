import { useEffect, useState } from "react";
import { Toaster } from "sonner";

import logo from "./assets/wallpaperflare.com_wallpaper.webp";
import SEO from "./components/SEO";
import ErrorBoundary from "./components/ErrorBoundary";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";

// تعريف sectionVariant في أعلى الملف
const sectionVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
};

export default function App() {

    return (
        <ErrorBoundary>
            <motion.div
                className="min-h-screen bg-dark text-white font-sans overflow-x-hidden relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <SEO />
                {/* خلفية جمالية محسنة */}
                <div className="pointer-events-none fixed inset-0 z-0">
                    {/* تدرج لوني يغطي الخلفية */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark/90 to-accent/15"></div>
                    {/* دوائر ضبابية متحركة */}
                    <div className="absolute w-[400px] h-[400px] bg-primary/10 rounded-full blur-xl top-[-100px] left-[-100px] animate-blob1"></div>
                    <div className="absolute w-[300px] h-[300px] bg-accent/8 rounded-full blur-lg bottom-[-80px] right-[-80px] animate-blob2"></div>
                    <div className="absolute w-[200px] h-[200px] bg-secondary/5 rounded-full blur-md top-1/2 left-1/4 animate-blob1" style={{ animationDelay: '2s' }}></div>
                </div>
                <Header />
                <main className="relative z-10">
                    <HeroSimple />
                    <SkillsSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>
                <Footer />
                <ScrollToTopButton />
                <Toaster />
                <ParticleBackground />
            </motion.div>
        </ErrorBoundary>
    );
}

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    const navLinks = [
        { href: "#home", label: "Home", icon: "fas fa-home" },
        { href: "#skills", label: "Skills", icon: "fas fa-code" },
        { href: "#projects", label: "Projects", icon: "fas fa-project-diagram" },
        { href: "#contact", label: "Contact", icon: "fas fa-envelope" },
    ];

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
    }, [navLinks]);

    return (
        <header className="fixed top-0 w-full bg-dark/70 backdrop-blur-lg z-50 border-b border-primary/20 shadow-lg animate-fade-in">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 text-white font-semibold hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-primary/20 overflow-hidden group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300">
                        <img src={logo} alt="Logo" style={{ width: 36, height: 36, objectFit: 'cover', borderRadius: '50%' }} className="group-hover:scale-110 transition-transform duration-300" />
                    </span>
                    <span className="text-lg font-bold text-dark group-hover:text-primary transition-colors duration-300">HexveilX</span>
                </a>
                <div className="hidden md:flex space-x-8 text-white font-medium">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`relative transition-colors duration-300 group ${activeLink === link.href.substring(1) ? 'text-primary' : 'hover:text-primary'}`}
                        >
                            {link.label}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeLink === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <button 
                        className="relative w-12 h-12 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300 group shadow-glow" 
                        onClick={() => setDrawerOpen(true)} 
                        aria-label="Open menu"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <i className="fas fa-bars text-xl relative z-10 group-hover:animate-bounce-gentle"></i>
                    </button>
                </div>
            </nav>
            {/* Enhanced Mobile Drawer */}
            {drawerOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Enhanced Overlay */}
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-fade-in" onClick={() => setDrawerOpen(false)}></div>
                    {/* Enhanced Drawer panel */}
                    <div className="ml-auto w-80 max-w-[85vw] h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-2xl border-l border-primary/30 flex flex-col p-8 animate-slide-in-right relative">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8 pb-6 border-b border-primary/20">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary shadow-glow">
                                    <img src={logo} alt="Logo" style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: '50%' }} />
                                </span>
                                <span className="text-xl font-bold gradient-text-primary">HexveilX</span>
                            </div>
                            <button 
                                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-glow" 
                                onClick={() => setDrawerOpen(false)} 
                                aria-label="Close menu"
                            >
                                <i className="fas fa-times text-lg"></i>
                            </button>
                        </div>
                        
                        {/* Navigation */}
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
                                    onClick={() => setDrawerOpen(false)}
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
                        
                        {/* Footer */}
                        <div className="pt-6 border-t border-primary/20">
                            <div className="text-center text-gray-400 text-sm">
                                <p className="mb-2">Built with ❤️</p>
                                <div className="flex justify-center gap-2 text-xs">
                                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">React</span>
                                    <span className="px-2 py-1 rounded-full bg-secondary/10 text-secondary">Convex</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

function HeroSimple() {
    return (
        <motion.section
            id="home"
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center justify-center min-h-[70vh] pt-32 pb-12 relative overflow-hidden"
        >
            <img
                src={logo}
                alt="Logo"
                loading="lazy"
                className="w-32 h-32 rounded-full shadow-glow-lg border-4 border-primary bg-white object-cover mb-6 transition-transform duration-300 hover-scale hover-glow"
            />
            <h1 className="text-5xl font-extrabold mb-2 text-center gradient-text-primary text-shadow-lg">
                Hello, I'm <span className="ml-2 gradient-text-secondary animate-text-glow">HexveilX</span>
            </h1>
            <h2 className="text-3xl font-bold mt-4 mb-2 text-center gradient-text-accent tracking-widest uppercase text-shadow">
    About Me    
            </h2>
            <p className="text-lg text-gray-300 max-w-xl text-center mb-8 border-l-4 border-primary pl-4 pr-4 py-2 glass-dark rounded-xl shadow-glow">
             I'm Zyad also known as HexveilX. I'm a passionate web developer I specialize in building sleek, modern websites with clean code and artistic design. Whether it's a portfolio, an AI-powered tool, or a dynamic UI I craft it with precision, personality, and style.
            </p>
        </motion.section>
    );
}

function SkillsSection() {
    const skills = [
        { icon: "fab fa-js-square", name: "JavaScript", color: "text-yellow-400" },
        { icon: "fab fa-python", name: "Python", color: "text-blue-400" },
        { icon: "fab fa-react", name: "React", color: "text-cyan-400" },
        { icon: "fab fa-html5", name: "HTML", color: "text-orange-400" },
        { icon: "fab fa-css3-alt", name: "CSS", color: "text-blue-500" },
        { icon: "typescript-img", name: "TypeScript", color: "text-blue-600", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ];
    return (
        <section id="skills" className="py-20 bg-dark animate-fade-in">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-primary animate-text-glow">
                    Skills & Technologies
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card group">
                            <div className="bg-light p-8 rounded-2xl text-center hover:bg-primary/10 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-primary/25 group animate-fade-in">
                                {skill.img ? (
                                    <img src={skill.img} alt="TypeScript Logo" className="mx-auto mb-4 w-10 h-10 group-hover:animate-bounce" />
                                ) : (
                                    <i className={`${skill.icon} text-[40px] ${skill.color} mb-4 group-hover:animate-bounce`}></i>
                                )}
                                <h3 className="font-semibold">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectsSection() {
    const projects = [
        {
            icon: "fas fa-calculator",
            title: "Calculator Web App",
            description: "A simple and responsive calculator web app built using React and Tailwind CSS.",
            gradient: "from-pink-500 to-yellow-500",
            github: "https://github.com/HexveilX/calculatorwebapp",
            demo: "https://calculatorwebapp-lake.vercel.app/"
        },
        {
            icon: "fas fa-tasks",
            title: "Daily Task Manager",
            description: "A modern and minimal web app to help users manage their daily tasks, stay organized, and boost productivity.",
            gradient: "from-blue-500 to-green-400",
            github: "https://github.com/HexveilX/Daily-Task-Manager",
            demo: "https://daily-task-manager-lemon.vercel.app/"
        }
    ];
    return (
        <section id="projects" className="py-20 bg-dark">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-secondary animate-text-glow">
                    My Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card glass-dark rounded-3xl overflow-hidden shadow-glow-lg hover:shadow-glow-xl hover-lift transition-all duration-300 border border-primary/10 backdrop-blur-md flex flex-col group"
                            style={{ minHeight: 370 }}
                        >
                            <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden animate-gradient-shift`}>
                                <div className="absolute inset-0 bg-black/10"></div>
                                <i className={`${project.icon} text-6xl text-white drop-shadow-lg relative z-10 group-hover:animate-bounce-gentle`}></i>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 gradient-text-primary text-shadow">{project.title}</h3>
                                    <p className="text-gray-500 mb-6 text-base leading-relaxed">{project.description}</p>
                                </div>
                                <div className="flex gap-3 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 rounded-full transition-all duration-200 font-semibold
                                            bg-transparent text-primary border border-primary/40
                                            hover:bg-primary hover:text-white hover-scale
                                            active:scale-98 focus-ring"
                                    >
                                        <i className="fab fa-github mr-2"></i>
                                        GitHub
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 rounded-full transition-all duration-200 font-semibold
                                                bg-transparent text-accent border border-accent/40
                                                hover:bg-accent hover:text-white hover-scale
                                                active:scale-98 focus-ring"
                                        >
                                            <i className="fas fa-external-link-alt mr-2"></i>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactSection() {
    const contacts = [
        {
            icon: "fab fa-github",
            title: "GitHub",
            description: "Check out my repositories",
            link: "https://github.com/HexveilX"
        },
        {
            icon: "fab fa-discord",
            title: "Discord",
            description: "@Zezolz",
            link: "https://discord.com/users/Zezolz"
        },
        {
            icon: "fas fa-envelope",
            title: "Email",
            description: "zyadalaa325@gmail.com",
            link: "mailto:zyadalaa325@gmail.com"
        }
    ];
    return (
        <section id="contact" className="py-20 bg-dark animate-fade-in">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text-accent animate-text-glow">
                    Contact
                </h2>
                <div className="max-w-6xl mx-auto">
                    <p className="text-xl text-gray-300 mb-12">
                        Ready to collaborate on your next project? Let's build something amazing together!
                    </p>
                    <div className="flex flex-col md:flex-row gap-12 items-center justify-center md:items-center md:justify-center">
                        <div className="flex-shrink-0 w-full md:w-auto md:max-w-xs grid grid-cols-1 gap-8">
                            {contacts.map((contact, index) => (
                                <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-card group bg-dark p-8 rounded-2xl hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25 active:scale-95">
                                    <i className={`${contact.icon} text-5xl text-primary mb-4 group-hover:animate-bounce`}></i>
                                    <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                                    <p className="text-gray-300">{contact.description}</p>
                                </a>
                            ))}
                        </div>
                        <div className="flex-1 w-full max-w-2xl">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-dark via-dark/80 to-primary/10 border-t border-primary/20 py-6 mt-12 shadow-glow">
            <div className="container mx-auto px-6 text-center">
                <p className="text-center text-gray-400 text-shadow">
                    © 2025 HexveilX – Built with <span className="gradient-text-primary">React</span>, <span className="gradient-text-secondary">Convex</span>, and <span className="text-red-500 animate-pulse-glow">❤️</span>
                </p>
            </div>
        </footer>
    );
}

function ScrollToTopButton() {
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
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-glow-lg hover:shadow-glow-xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 group animate-fade-in"
                    aria-label="Scroll to top"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                    <i className="fas fa-arrow-up text-white text-xl relative z-10 group-hover:animate-bounce-gentle group-hover:text-2xl transition-all duration-300"></i>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-pulse-glow"></div>
                </button>
            )}
        </>
    );
}

function ParticleBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary/20 rounded-full animate-bounce-gentle" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-secondary/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-accent/35 rounded-full animate-bounce-gentle" style={{ animationDelay: '5s' }}></div>
        </div>
    );
}