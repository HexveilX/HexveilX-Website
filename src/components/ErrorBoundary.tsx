import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="min-h-screen bg-dark text-white flex items-center justify-center">
                    <div className="text-center p-8">
                        <div className="text-6xl mb-4">😅</div>
                        <h1 className="text-2xl font-bold mb-4 text-primary">Oops! Something went wrong</h1>
                        <p className="text-gray-400 mb-6">Don't worry, it's not you - it's us!</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full transition-colors duration-300"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
} 