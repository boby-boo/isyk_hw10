import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        console.log(error.message);
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMessage />
        }

        return this.props.children
    }

}

export default ErrorBoundary;
