import React, {useContext, useState} from 'react';
import {NotesContext, NotesI} from "../../context/notesContext";
import {NotesProps} from "./Notes.props";
import styles from './Notes.module.css';
import NewNote from "./NewNote/NewNote";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {Button, TextField} from "@mui/material";
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
const Notes = ({...props}:NotesProps):JSX.Element => {
    const {notes,deleteNote ,editNote} = useContext( NotesContext);
    const [open, setOpen] = useState(false);
    const [editNoteState, setEditNoteState]= useState<NotesI[]>([])

    const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        let id =e.currentTarget.dataset.id;
        let curNote = notes.filter( note=>note.id=== Number(id));
        setEditNoteState(curNote);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const val= e.target.value;
        setEditNoteState(current=>
            current.map( obj=>{
                return {
                    ...obj, title: val
                }

            } )
        )

    }
    const onChangeDesc = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const val= e.target.value;
        setEditNoteState(current=>
            current.map( obj=>{
                return {
                    ...obj, description: val
                }
            })
        )

    }
    const onDelete = (e: React.MouseEvent<HTMLButtonElement>)=>{
        let id =e.currentTarget.dataset.id;
        deleteNote(Number(id));
    }
    const saveEdited = ()=>{
        editNote(editNoteState[0])
    }
    console.log(editNote);
    return (
        <div {...props} className={styles.wrapper} >
            <div className={styles.notesContainer}>
                <NewNote/>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={styles.box} >
                        <TextField  label="Заголовок" variant="outlined" size="small" name="title"
                                    onChange={onChangeTitle} className={styles.titleModal}
                                    id="margin-normal" margin="normal"
                                    value={editNoteState.length>0 ? editNoteState[0].title : ''}
                        />
                        <TextField  label="Описание" variant="outlined" size="small" name="description"
                                    onChange={onChangeDesc} className={styles.descModal}
                                    id="margin-normal" margin="normal"
                                    value={ editNoteState.length>0 ? editNoteState[0].description : ''}
                        />
                        <div className={styles.fl}>
                            <Button onClick={saveEdited} variant="outlined">Сохранить</Button>
                        </div>

                    </Box>
                </Modal>
                {
                    notes.length>0 ? notes.map((n)=>(
                            <div key={n.id} className={styles.oneNote}>
                                <div className={styles.editBlock}>
                                    <Button variant="outlined" onClick={handleOpen} data-id={n.id} >
                                        <CreateOutlinedIcon/>
                                    </Button>
                                    <Button onClick={onDelete} data-id={n.id} variant="outlined">
                                        <DeleteOutlineOutlinedIcon />
                                    </Button>
                                </div>
                                <div className={styles.title}>
                                    {n.title}
                                </div>
                                <div>
                                    {n.description}
                                </div>
                            </div>
                        ))
                        :
                        <h1>Заметки отсутсвуют</h1>
                }
            </div>
        </div>
    );
};

export default Notes;