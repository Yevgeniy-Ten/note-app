import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import NotesItem from "./NotesItem/NotesItem";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const NotesList = ({notes, onRemove}) => {
    return <ListGroup className="py-5">
        {
            notes.length ? notes.map((note, i) => {
                    return <ErrorBoundary key={note.id}>
                        <NotesItem
                            onRemove={onRemove.bind(null, note.id)}
                            count={i + 1} date={note.date}
                            title={note.title}/>
                    </ErrorBoundary>
                }) :
                <NotesItem title="Notes list is empty"/>
        }
    </ListGroup>
}
export default NotesList