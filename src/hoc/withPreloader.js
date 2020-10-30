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

        showLoad = (type = "success") => {
            this.setState({isLoad: true, type})
        }

        hideLoad() {
            this.setState({isLoad: false})
        }

        componentDidMount() {
            const interceptors = {
                response: axios.interceptors.response.use((res) => {
                    this.hideLoad()
                    return res
                }, _ => this.hideLoad()),
                request: axios.interceptors.request.use((req) => {
                    if (req.url.includes("errors")) {
                        this.showLoad("danger")
                        return req
                    }
                    this.showLoad()
                    return req
                }, _ => this.hideLoad())
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