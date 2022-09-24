import React, {useContext, useState} from 'react';
import {NotesContext} from "../../../context/notesContext";
import {NewNoteProps} from "./NewNote.props";
import styles from './NewNote.module.css'
import { TextField, Button} from "@mui/material";
const NewNote = ({...props}:NewNoteProps):JSX.Element => {
     const {notes,saveNote} = useContext( NotesContext);

    const [data, setData] = useState({
        title: '',
        description:''
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    console.log(data)
    const submitData = ()=>{
        saveNote(data)
    }

    return (
        <div {...props} className={styles.wrapper} >
            <div className={styles.title1}>
                <TextField label="Заголовок" variant="outlined"
                           name="title"
                           onChange={onChange}
                />
            </div>
            <div className={styles.desc1}>
                <TextField label="Описание" variant="outlined"
                           name="description"
                           onChange={onChange}
                />
            </div>
            <Button variant="outlined" className={styles.saveBtn}
                    onClick={submitData}>
                Сохранить
            </Button>

        </div>
    );
};

export default NewNote;