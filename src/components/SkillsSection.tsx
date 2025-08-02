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
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-primary"
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
            className="skill-card group animate-smooth-scale"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
        >
            <div className="bg-light p-8 rounded-2xl text-center hover:bg-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                <SkillIcon skill={skill} />
                <h3 className="font-semibold">
                    {skill.name}
                </h3>
                </div>
            </div>
        </motion.div>
    );
}

function SkillIcon({ skill }: { skill: Skill }) {
    if (skill.img) {
        return (
            <img 
                src={skill.img} 
                alt={`${skill.name} Logo`} 
                className="mx-auto mb-4 w-10 h-10" 
            />
        );
    }

    return (
        <i 
            className={`${skill.icon} text-[40px] ${skill.color} mb-4`}
        />
    );
}