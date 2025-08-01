interface Particle {
    className: string;
    style?: React.CSSProperties;
}

const particles: Particle[] = [
    { className: "absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" },
    { 
        className: "absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-bounce-gentle", 
        style: { animationDelay: '1s' } 
    },
    { 
        className: "absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-float", 
        style: { animationDelay: '2s' } 
    },
    { 
        className: "absolute top-1/2 right-1/4 w-1 h-1 bg-primary/20 rounded-full animate-bounce-gentle", 
        style: { animationDelay: '3s' } 
    },
    { 
        className: "absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-secondary/25 rounded-full animate-float", 
        style: { animationDelay: '4s' } 
    },
    { 
        className: "absolute top-1/6 right-1/6 w-1 h-1 bg-accent/35 rounded-full animate-bounce-gentle", 
        style: { animationDelay: '5s' } 
    }
];

export default function ParticleBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {particles.map((particle, index) => (
                <div 
                    key={index} 
                    className={particle.className} 
                    style={particle.style}
                />
            ))}
        </div>
    );
}