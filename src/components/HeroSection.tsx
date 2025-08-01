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
            whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
            }}
            className="relative mb-6"
        >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-morph opacity-20 blur-xl"></div>
            <img
                src={logo}
                alt="HexveilX Profile"
                loading="lazy"
                className="relative w-32 h-32 rounded-full shadow-glow-lg border-4 border-primary bg-white object-cover transition-all duration-300 hover:shadow-neon animate-neon-pulse"
            />
        </motion.div>
    );
}

function MainHeading() {
    return (
        <motion.h1 
            variants={itemVariants}
            className="text-5xl font-extrabold mb-2 text-center gradient-text-primary text-shadow-lg"
        >
            <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                Hello, I'm
            </motion.span>{" "}
            <motion.span 
                className="ml-2 gradient-text-secondary animate-text-glow inline-block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8, type: "spring" }}
                whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 20px rgba(139, 92, 246, 0.8)"
                }}
            >
                HexveilX
            </motion.span>
        </motion.h1>
    );
}

function AboutSection() {
    return (
        <motion.div variants={itemVariants}>
            <motion.h2 
                className="text-3xl font-bold mt-4 mb-2 text-center gradient-text-accent tracking-widest uppercase text-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
            >
                About Me    
            </motion.h2>
            <motion.p 
                className="text-lg text-gray-300 max-w-xl text-center mb-8 border-l-4 border-primary pl-4 pr-4 py-2 glass-card rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
            >
                I'm Zyad also known as HexveilX. I'm a passionate web developer I specialize in building sleek, 
                modern websites with clean code and artistic design. Whether it's a portfolio, an AI-powered tool, 
                or a dynamic UI I craft it with precision, personality, and style.
            </motion.p>
        </motion.div>
    );
}