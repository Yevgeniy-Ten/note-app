import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {getRandomInt} from "../../../assets/helpers";
import Button from "react-bootstrap/Button";
import {randomError} from "../../../assets/helpers";

const NotesItem = ({title, date, count, onRemove}) => {
    randomError()
    const variants = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]
    const randomI = getRandomInt(0, variants.length)
    const variant = variants[randomI]
    return <ListGroupItem variant={variant}>
        <div className="d-flex justify-content-between align-items-center">
            <div className="py-2">
                <p>Note #{count}<small className="ml-1">{date}</small></p>
            </div>
            <Button onClick={onRemove} variant="danger">&times;</Button>
        </div>
        <p>{title}</p></ListGroupItem>
}

export default NotesItem