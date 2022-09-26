import React, {useContext, useState} from 'react';
import {NotesContext} from "../../../context/notesContext";
import {NewNoteProps} from "./NewNote.props";
import styles from './NewNote.module.css'
import { TextField, Button} from "@mui/material";
const NewNote = ({...props}:NewNoteProps):JSX.Element => {
    const {createNote} = useContext( NotesContext);
    const [error, setError] = useState({
        title: false,
        description:false
    });
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
    const submitData = ()=>{
        if(!data.title){
            setError({
                ...error,
                title: !error.title
            })
        }
        else if(!data.description) {
            setError({
                ...error,
                description: !error.description
            })
        }
        else {
            createNote(data)
            setError({
                title: false,
                description:false
            })
        }
    }

    return (
        <div {...props} className={styles.wrapper} >
            <div className={styles.title1}>
                <TextField label="Заголовок" variant="outlined"
                           error={error.title}
                           required
                           name="title"
                           onChange={onChange}
                />
            </div>
            <div className={styles.desc1}>
                <TextField label="Описание" variant="outlined"
                           error={error.description}
                           required
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