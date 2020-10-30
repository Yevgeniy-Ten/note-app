import React from "react";
import Preloader from "../components/Preloader/Preloader";

const withPreloader = (Component, axios) => {
    class withPreloader extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoad: false,
                type: "success",
            }
        }

        toggleLoad(type = "success") {
            this.setState(prev => ({isLoad: !prev.isLoad, type}))
        }

        componentDidMount() {
            const interceptors = {
                response: axios.interceptors.response.use((res) => {
                    this.toggleLoad()
                    return res
                }),
                request: axios.interceptors.request.use((req) => {
                    if (req.url.includes("errors")) {
                        this.toggleLoad("danger")
                        return req
                    }
                    this.toggleLoad()
                    return req
                })
            }
            this.setState({interceptors})
        }

        componentWillUnmount() {
            if (this.state.interceptors) {
                axios.interceptors.request.eject(this.state.interceptors.request)
                axios.interceptors.response.eject(this.state.interceptors.response)
            }
        }

        render() {
            return <>
                <Preloader type={this.state.type} isLoad={this.state.isLoad}/>
                <Component {...this.props}/>
            </>
        }
    }

    withPreloader.displayName = `withPreloader(${Component.displayName || Component.name || "Component"})`
    return withPreloader
}
export default withPreloader