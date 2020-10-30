import React from "react";
import Preloader from "../components/Preloader/Preloader";

const withPreloader = (Component, axios) => {
    class withPreloader extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoad: false,
            }
        }

        componentDidMount() {
            const interceptors = {
                response: axios.interceptors.response.use((res) => {
                    this.setState({isLoad: false})
                    return res
                }),
                request: axios.interceptors.request.use((req) => {
                    this.setState({isLoad: true})
                    return req
                })
            }
            this.setState({interceptors})
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.state.interceptors.request)
            axios.interceptors.response.eject(this.state.interceptors.response)
        }

        render() {
            return <>
                <Preloader isLoad={this.state.isLoad}/>
                <Component {...this.props}/>
            </>
        }
    }

    withPreloader.displayName = `withPreloader(${Component.displayName || Component.name || "Component"})`
    return withPreloader
}
export default withPreloader