import React from "react";
import ErrorMessage from "../ErrorPage/ErrorPage";

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
        console.log(this.state.hasError)
        if (this.state.hasError) {
            return <ErrorMessage />
        }

        return this.props.children
    }

}

export default ErrorBoundary;