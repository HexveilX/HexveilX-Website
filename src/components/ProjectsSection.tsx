import { motion } from "framer-motion";

interface Project {
    icon: string;
    title: string;
    description: string;
    gradient: string;
    github: string;
    demo?: string;
}

const projects: Project[] = [
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
    hidden: { y: 100, opacity: 0 },
    show: { 
        y: 0, 
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 12
        }
    }
};

export default function ProjectsSection() {
    return (
        <motion.section 
            id="projects" 
            className="py-20 bg-dark"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-6">
                <SectionTitle />
                <ProjectsGrid />
            </div>
        </motion.section>
    );
}

function SectionTitle() {
    return (
        <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-secondary animate-text-glow"
            variants={itemVariants}
        >
            My Projects
        </motion.h2>
    );
}

function ProjectsGrid() {
    return (
        <motion.div 
            className="grid md:grid-cols-2 gap-10"
            variants={containerVariants}
        >
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </motion.div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            className="project-card glass-card rounded-3xl overflow-hidden shadow-glow-lg hover:shadow-glow-xl transition-all duration-300 border border-primary/10 backdrop-blur-md flex flex-col group"
            style={{ minHeight: 370 }}
            variants={itemVariants}
            whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02
            }}
            whileTap={{ scale: 0.98 }}
        >
            <ProjectHeader project={project} />
            <ProjectContent project={project} />
        </motion.div>
    );
}

function ProjectHeader({ project }: { project: Project }) {
    return (
        <motion.div 
            className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden animate-gradient-shift`}
            whileHover={{ scale: 1.05 }}
        >
            <div className="absolute inset-0 bg-black/10"></div>
            <motion.i 
                className={`${project.icon} text-6xl text-white drop-shadow-lg relative z-10`}
                whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    textShadow: "0 0 30px rgba(255,255,255,0.8)"
                }}
                transition={{ duration: 0.6 }}
            />
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </motion.div>
    );
}

function ProjectContent({ project }: { project: Project }) {
    return (
        <div className="p-8 flex-1 flex flex-col justify-between">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <motion.h3 
                    className="text-2xl font-bold mb-2 gradient-text-primary text-shadow"
                    whileHover={{ scale: 1.05 }}
                >
                    {project.title}
                </motion.h3>
                <motion.p 
                    className="text-gray-500 mb-6 text-base leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {project.description}
                </motion.p>
            </motion.div>
            <ProjectLinks project={project} />
        </div>
    );
}

function ProjectLinks({ project }: { project: Project }) {
    return (
        <motion.div 
            className="flex gap-3 mt-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
        >
            <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full transition-all duration-200 font-semibold
                    bg-transparent text-primary border border-primary/40
                    hover:bg-primary hover:text-white
                    active:scale-98 focus-ring"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
            >
                <i className="fab fa-github mr-2"></i>
                GitHub
            </motion.a>
            {project.demo && (
                <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full transition-all duration-200 font-semibold
                        bg-transparent text-accent border border-accent/40
                        hover:bg-accent hover:text-white
                        active:scale-98 focus-ring"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live Demo
                </motion.a>
            )}
        </motion.div>
    );
}