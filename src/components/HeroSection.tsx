import { motion } from "framer-motion";
import logo from "../assets/wallpaperflare.com_wallpaper.webp";

const sectionVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
};

export default function HeroSection() {
    return (
        <motion.section
            id="home"
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center justify-center min-h-[70vh] pt-32 pb-12 relative overflow-hidden"
        >
            <ProfileImage />
            <MainHeading />
            <AboutSection />
        </motion.section>
    );
}

function ProfileImage() {
    return (
        <img
            src={logo}
            alt="HexveilX Profile"
            loading="lazy"
            className="w-32 h-32 rounded-full shadow-glow-lg border-4 border-primary bg-white object-cover mb-6 transition-transform duration-300 hover-scale hover-glow"
        />
    );
}

function MainHeading() {
    return (
        <h1 className="text-5xl font-extrabold mb-2 text-center gradient-text-primary text-shadow-lg">
            Hello, I'm{" "}
            <span className="ml-2 gradient-text-secondary animate-text-glow">
                HexveilX
            </span>
        </h1>
    );
}

function AboutSection() {
    return (
        <>
            <h2 className="text-3xl font-bold mt-4 mb-2 text-center gradient-text-accent tracking-widest uppercase text-shadow">
                About Me    
            </h2>
            <p className="text-lg text-gray-300 max-w-xl text-center mb-8 border-l-4 border-primary pl-4 pr-4 py-2 glass-dark rounded-xl shadow-glow">
                I'm Zyad also known as HexveilX. I'm a passionate web developer I specialize in building sleek, 
                modern websites with clean code and artistic design. Whether it's a portfolio, an AI-powered tool, 
                or a dynamic UI I craft it with precision, personality, and style.
            </p>
        </>
    );
}