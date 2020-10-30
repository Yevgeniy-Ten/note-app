import React from "react";
import Alert from "react-bootstrap/Alert";

const AppAlert = ({title, type, children}) => (
    <Alert variant={type}>
        <Alert.Heading>{title || "Alert"}</Alert.Heading>
        <p>
            {children}
        </p>
    </Alert>
)
export default AppAlert
