import React from "react";
import AppAlert from "../AppAlert/AppAlert";

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <AppAlert type="danger" title={"Whoops!!!, An Error has ocurred"}>
                This message indicates an error while loading, Sorry
            </AppAlert>
        }
        return this.props.children
    }
}

export default ErrorBoundary