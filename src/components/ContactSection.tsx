import { motion } from "framer-motion";
import ContactForm from "../ContactForm";

interface ContactInfo {
    icon: string;
    title: string;
    description: string;
    link: string;
}

const contacts: ContactInfo[] = [
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

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
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

export default function ContactSection() {
    return (
        <motion.section 
            id="contact" 
            className="py-20 bg-dark"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-6 text-center">
                <SectionTitle />
                <SectionDescription />
                <ContactContent />
            </div>
        </motion.section>
    );
}

function SectionTitle() {
    return (
        <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 gradient-text-accent animate-text-glow"
            variants={itemVariants}
        >
            Contact
        </motion.h2>
    );
}

function SectionDescription() {
    return (
        <motion.div 
            className="max-w-6xl mx-auto"
            variants={itemVariants}
        >
            <motion.p 
                className="text-xl text-gray-300 mb-12"
                whileHover={{ scale: 1.02 }}
            >
                Ready to collaborate on your next project? Let's build something amazing together!
            </motion.p>
        </motion.div>
    );
}

function ContactContent() {
    return (
        <motion.div 
            className="max-w-6xl mx-auto"
            variants={containerVariants}
        >
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center md:items-center md:justify-center">
                <ContactCards />
                <ContactFormWrapper />
            </div>
        </motion.div>
    );
}

function ContactCards() {
    return (
        <motion.div 
            className="flex-shrink-0 w-full md:w-auto md:max-w-xs grid grid-cols-1 gap-8"
            variants={containerVariants}
        >
            {contacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
            ))}
        </motion.div>
    );
}

function ContactCard({ contact }: { contact: ContactInfo }) {
    return (
        <motion.a 
            href={contact.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card group glass-card p-8 rounded-2xl hover:bg-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 border-neon"
            variants={itemVariants}
            whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.i 
                className={`${contact.icon} text-5xl text-primary mb-4`}
                whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    textShadow: "0 0 20px currentColor"
                }}
                transition={{ duration: 0.5 }}
            />
            <motion.h3 
                className="text-xl font-semibold mb-2"
                whileHover={{ scale: 1.05 }}
            >
                {contact.title}
            </motion.h3>
            <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
            >
                {contact.description}
            </motion.p>
        </motion.a>
    );
}

function ContactFormWrapper() {
    return (
        <motion.div 
            className="flex-1 w-full max-w-2xl"
            variants={itemVariants}
        >
            <ContactForm />
        </motion.div>
    );
}