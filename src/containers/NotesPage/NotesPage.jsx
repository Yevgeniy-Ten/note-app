import React, {useEffect, useState} from "react";
import axios from "../../assets/instanse";
import {handlerDataFromDB} from "../../assets/helpers";
import NotesList from "../../components/NotesList/NotesList";

const NotesPage = () => {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        getDBNotes()
    }, [])
    const getDBNotes = () => {
        const URI = "/notes.json"
        axios.get(URI).then((res) => {
            if (res.data) {
                setNotes(handlerDataFromDB(res.data))
            }
        })
    }
    const removeNote = (id) => {
        const URI = `/notes/${id}.json`
        axios.delete(URI).then(() => {
            setNotes(prev => (prev.filter(note => note.id !== id)))
        })
    }
    return (
        <NotesList notes={notes} onRemove={removeNote}/>
    )
}
export default NotesPage