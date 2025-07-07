import { useEffect } from 'react';

// SEO Component
export default function SEO() {
    useEffect(() => {
        // Update meta tags dynamically
        document.title = "HexveilX Web";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'HexveilX - Web developer & AI explorer crafting digital experiences with passion and precision. Specializing in JavaScript, Python, React, and modern web technologies.');
        }
    }, []);

    return null;
} 