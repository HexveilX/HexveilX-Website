import { motion } from "framer-motion";

interface Skill {
    icon?: string;
    name: string;
    color: string;
    img?: string;
}

const skills: Skill[] = [
    { icon: "fab fa-js-square", name: "JavaScript", color: "text-yellow-400" },
    { icon: "fab fa-python", name: "Python", color: "text-blue-400" },
    { icon: "fab fa-react", name: "React", color: "text-cyan-400" },
    { icon: "fab fa-html5", name: "HTML", color: "text-orange-400" },
    { icon: "fab fa-css3-alt", name: "CSS", color: "text-blue-500" },
    { 
        name: "TypeScript", 
        color: "text-blue-600", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    show: { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

export default function SkillsSection() {
    return (
        <motion.section 
            id="skills" 
            className="py-20 bg-dark"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-6">
                <SectionTitle />
                <SkillsGrid />
            </div>
        </motion.section>
    );
}

function SectionTitle() {
    return (
        <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-primary animate-text-glow"
            variants={itemVariants}
        >
            Skills & Technologies
        </motion.h2>
    );
}

function SkillsGrid() {
    return (
        <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={containerVariants}
        >
            {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
            ))}
        </motion.div>
    );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
    return (
        <motion.div 
            className="skill-card group"
            variants={itemVariants}
            whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 8px rgb(255, 255, 255)",
                boxShadow: "0 0 20px #8b5cf6"
            }}
            whileTap={{ scale: 0.9, rotate: -5 }}
        >
            <div className="bg-light p-8 rounded-2xl text-center hover:bg-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 group glass-card border-neon hover-tilt">
                <SkillIcon skill={skill} />
                <motion.h3 
                    className="font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {skill.name}
                </motion.h3>
            </div>
        </motion.div>
    );
}

function SkillIcon({ skill }: { skill: Skill }) {
    if (skill.img) {
        return (
            <motion.img 
                src={skill.img} 
                alt={`${skill.name} Logo`} 
                className="mx-auto mb-4 w-10 h-10" 
                whileHover={{ 
                    rotate: 360,
                    scale: 1.2
                }}
                transition={{ duration: 0.3 }}
            />
        );
    }

    return (
        <motion.i 
            className={`${skill.icon} text-[40px] ${skill.color} mb-4`}
            whileHover={{ 
                scale: 1.3,
                rotate: [0, -10, 10, 0],
                textShadow: "0 0 20px currentColor"
            }}
            transition={{ duration: 0.3 }}
        />
    );
}