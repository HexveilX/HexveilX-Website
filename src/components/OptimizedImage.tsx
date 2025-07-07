import { useState } from 'react';

// Loading Component
function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
    );
}

// Image Component with Loading State
export default function OptimizedImage({ src, alt, className, ...props }: { src: string; alt: string; className?: string;[key: string]: any }) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={`relative ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-full">
                    <LoadingSpinner />
                </div>
            )}
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 rounded-full">
                    <i className="fas fa-image text-gray-500 text-2xl"></i>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }}
                loading="lazy"
                {...props}
            />
        </div>
    );
} 