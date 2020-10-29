import React from "react"
import Layout from "../../components/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import AppForm from "../../components/AppForm/AppForm";
import {useInputValue} from "../../assets/customHooks";
import axios from "../../assets/instanse"

function NotesApp() {
    const noteInput = useInputValue()
    const addNote = (e) => {
        e.preventDefault()
        const URI = "/notes.json"
        const note = {
            date: new Date().toLocaleDateString(),
            title: noteInput.value
        }
        axios.post(URI, note)
    }
    return (
        <>
            <Layout>
                <Switch>
                    <Route path="/notes/add"
                           render={() => <AppForm submitHandler={addNote}
                                                  textInput={noteInput.bind}/>}/>
                </Switch>
            </Layout>
        </>
    );
}

export default NotesApp;
