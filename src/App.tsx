import { Toaster } from "sonner";
import { motion } from "framer-motion";

import SEO from "./components/SEO";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ParticleBackground from "./components/ParticleBackground";
import BackgroundEffects from "./components/BackgroundEffects";

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
                <BackgroundEffects />
                <Header />
                
                <main className="relative z-10">
                    <HeroSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>
                
                <Footer />
                <ScrollToTopButton />
                <ParticleBackground />
                <Toaster />
            </motion.div>
        </ErrorBoundary>
    );
}