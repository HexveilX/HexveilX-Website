import { motion } from "framer-motion";

interface Particle {
    className: string;
    style?: React.CSSProperties;
}

const particles: Particle[] = [
    { className: "absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full" },
    { 
        className: "absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/40 rounded-full", 
        style: { animationDelay: '1s' } 
    },
    { 
        className: "absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full", 
        style: { animationDelay: '2s' } 
    },
    { 
        className: "absolute top-1/2 right-1/4 w-1 h-1 bg-primary/20 rounded-full", 
        style: { animationDelay: '3s' } 
    },
    { 
        className: "absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-secondary/25 rounded-full", 
        style: { animationDelay: '4s' } 
    },
    { 
        className: "absolute top-1/6 right-1/6 w-1 h-1 bg-accent/35 rounded-full", 
        style: { animationDelay: '5s' } 
    }
];

export default function ParticleBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {particles.map((particle, index) => (
                <motion.div 
                    key={index} 
                    className={particle.className} 
                    style={particle.style}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, -10, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                        duration: 6 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                    }}
                />
            ))}
            
            {/* Additional floating elements */}
            <motion.div
                className="absolute top-1/5 left-1/5 w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20"
                animate={{
                    rotate: 360,
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            
            <motion.div
                className="absolute bottom-1/4 right-1/5 w-4 h-4 bg-gradient-to-r from-accent to-secondary rounded-full opacity-15"
                animate={{
                    rotate: -360,
                    y: [0, -30, 0],
                    x: [0, 20, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}