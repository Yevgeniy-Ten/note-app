import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

const AppForm = () => (
    <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your note</Form.Label>
            <Form.Control as="textarea" rows={3}/>
            <Form.Text className="text-muted">
                The main thing is to live life, and not to rummage through the back streets of memory.
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
)
export default AppForm