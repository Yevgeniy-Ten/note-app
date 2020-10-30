import React from "react";
import AppAlert from "../AppAlert/AppAlert";
import axios from "../../assets/instanse"
import withPreloader from "../../hoc/withPreloader";

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
    }

    componentDidCatch(_, errorInfo) {
        this.sendError(errorInfo)
        this.setState({hasError: true})
    }

    sendError(errorInfo) {
        const URI = "/notes/errors.json"
        const errorData = {
            title: "Some error",
            info: errorInfo,
        }
        axios.post(URI, errorData)
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

export default withPreloader(ErrorBoundary, axios)