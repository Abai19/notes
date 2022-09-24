import React, {useContext} from 'react';
import {NotesContext} from "../../context/notesContext";
import {NotesProps} from "./Notes.props";
import styles from './Notes.module.css'
import NewNote from "./NewNote/NewNote";
const Notes = ({...props}:NotesProps):JSX.Element => {
    const {notes} = useContext( NotesContext);
    return (
        <div {...props} className={styles.wrapper} >
            <div className={styles.notesContainer}>
            <NewNote/>
            {
                notes.map((n)=>(
                    <div key={n.id} className={styles.oneNote}>
                        <div className={styles.title}>
                            {n.title}
                        </div>
                        <div>
                            {n.description}
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Notes;