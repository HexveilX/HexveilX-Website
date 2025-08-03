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
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-secondary"
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
            className="project-card bg-light rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group animate-smooth-scale"
            style={{ minHeight: 370 }}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl group-hover:animate-soft-pulse"></div>
            <div className="relative z-10">
            <ProjectHeader project={project} />
            <ProjectContent project={project} />
            </div>
        </motion.div>
    );
}

function ProjectHeader({ project }: { project: Project }) {
    return (
        <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-gentle-pulse group-hover:animate-soft-pulse"></div>
            <i 
                className={`${project.icon} text-6xl text-white drop-shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:animate-subtle-bounce`}
            />
        </div>
    );
}

function ProjectContent({ project }: { project: Project }) {
    return (
        <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-bold mb-2 gradient-text-primary">
                    {project.title}
                </h3>
                <p className="text-gray-500 mb-6 text-base leading-relaxed">
                    {project.description}
                </p>
            </div>
            <ProjectLinks project={project} />
        </div>
    );
}

function ProjectLinks({ project }: { project: Project }) {
    return (
        <div className="flex gap-3 mt-auto">
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full transition-all duration-200 font-semibold
                    bg-transparent text-primary border border-primary/40
                    hover:bg-primary hover:text-white"
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
                        hover:bg-accent hover:text-white"
                >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live Demo
                </a>
            )}
        </div>
    );
}