import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import NotesItem from "./NotesItem/NotesItem";

const NotesList = ({notes, onRemove}) => {
    return <ListGroup className="py-5">
        {
            notes.length ? notes.map((note, i) => <NotesItem key={note.id}
                                                             onRemove={onRemove.bind(null, note.id)}
                                                             count={i + 1} date={note.date}
                                                             title={note.title}/>) :
                <NotesItem title="Notes list is empty"/>
        }
    </ListGroup>
}
export default NotesList