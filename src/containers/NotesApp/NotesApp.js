import React from "react"
import Layout from "../../components/Layout/Layout";
import {Switch, Route, Redirect} from "react-router-dom";
import AppForm from "../../components/AppForm/AppForm";
import {useInputValue} from "../../assets/customHooks";
import axios from "../../assets/instanse"
import NotesPage from "../NotesPage/NotesPage";
import withPreloader from "../../hoc/withPreloader";
import {validString} from "../../assets/helpers";

function NotesApp() {
    const noteInput = useInputValue()

    const addNote = (e) => {
        e.preventDefault()
        const URI = "/notes.json"
        if (validString(noteInput.value)) {
            const note = {
                date: new Date().toLocaleDateString(),
                title: noteInput.value
            }
            axios.post(URI, note)
        }
    }
    return (

        <>
            <Layout>
                <Switch>
                    <Route path="/notes" exact component={NotesPage}/>
                    <Route path="/notes/add"
                           render={() => <AppForm submitHandler={addNote}
                                                  textInput={noteInput.bind}/>}/>
                    <Redirect from="" to="/notes"/>
                </Switch>
            </Layout>
        </>
    );
}

export default withPreloader(NotesApp, axios);
