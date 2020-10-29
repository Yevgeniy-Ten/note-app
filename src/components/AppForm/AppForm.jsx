import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

const AppForm = ({submitHandler, textInput}) => (
    <Form onSubmit={submitHandler} className="my-5">
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your note</Form.Label>
            <Form.Control required {...textInput} as="textarea" rows={3}/>
            <Form.Text className="text-muted">
                The main thing is to live life, and not to rummage through the back streets of memory.
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
            Save Note
        </Button>
    </Form>
)
export default AppForm