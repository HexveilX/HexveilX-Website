export default function BackgroundEffects() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0">
            <GradientOverlay />
            <FloatingBlobs />
        </div>
    );
}

function GradientOverlay() {
    return (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark/90 to-accent/15"></div>
    );
}

function FloatingBlobs() {
    return (
        <>
            <div className="absolute w-[400px] h-[400px] bg-primary/10 rounded-full blur-xl top-[-100px] left-[-100px] animate-blob1"></div>
            <div className="absolute w-[300px] h-[300px] bg-accent/8 rounded-full blur-lg bottom-[-80px] right-[-80px] animate-blob2"></div>
            <div 
                className="absolute w-[200px] h-[200px] bg-secondary/5 rounded-full blur-md top-1/2 left-1/4 animate-blob1" 
                style={{ animationDelay: '2s' }}
            ></div>
        </>
    );
}