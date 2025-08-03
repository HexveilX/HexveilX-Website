import { motion } from "framer-motion";
import logo from "../assets/wallpaperflare.com_wallpaper.webp";

const sectionVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { 
        y: 0, 
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

export default function HeroSection() {
    return (
        <motion.section
            id="home"
            variants={containerVariants}
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
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="relative mb-6 animate-subtle-float animate-gentle-glow"
        >
            <img
                src={logo}
                alt="HexveilX Profile"
                loading="lazy"
                className="w-32 h-32 rounded-full shadow-glow-lg border-4 border-primary bg-white object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 animate-gentle-pulse -z-10"></div>
        </motion.div>
    );
}

function MainHeading() {
    return (
        <motion.h1 
            variants={itemVariants}
            className="text-5xl font-extrabold mb-2 text-center gradient-text-primary"
        >
            Hello, I'm <span className="gradient-text-secondary">HexveilX</span>
        </motion.h1>
    );
}

function AboutSection() {
    return (
        <motion.div variants={itemVariants}>
            <motion.h2 
                className="text-3xl font-bold mt-4 mb-2 text-center gradient-text-accent"
            >
                About Me    
            </motion.h2>
            <motion.p 
                className="text-lg text-gray-300 max-w-xl text-center mb-8"
            >
                I'm Zyad also known as HexveilX. I'm a passionate web developer I specialize in building sleek, 
                modern websites with clean code and artistic design. Whether it's a portfolio, an AI-powered tool, 
                or a dynamic UI I craft it with precision, personality, and style.
            </motion.p>
        </motion.div>
    );
}