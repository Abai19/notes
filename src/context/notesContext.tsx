import React, {createContext, ReactNode, useEffect, useState} from 'react'
export  interface NotesI {
    id: number;
    title: string;
    description: string;
}
interface NotesS {
    title: string;
    description: string;
}

interface Props {
    children:ReactNode;
}
type NotesTypes= {
    notes: NotesI[];
    getNotes:()=> void;
    createNote: (note:NotesS)=>void;
    deleteNote: (id:number)=>void;
    editNote: (note:NotesI)=>void;
    searchNote: (search: string)=>void;
}
export const NotesContext = createContext<NotesTypes>({notes:[], getNotes:()=>{},createNote:(note:NotesS)=>{}, deleteNote:(id:number)=>{},editNote:(note:NotesI)=>{},searchNote:(search:string)=>{}});

const NotesProvider= ({children} : Props )=>{
    const [notes, setNotes] = useState<NotesI[]>([]);
    useEffect(()=>{
        fetch("http://localhost:8000/notes")
            .then(response=> response.json())
            .then(response=> setNotes(response))
    },[])
    const getNotes = () =>{
        fetch("http://localhost:8000/notes")
            .then(response=> response.json())
            .then(response=> setNotes(response))
    }
    const createNote = (note:NotesS)=>{
        fetch('http://localhost:8000/notes', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        })
            .then((response) => response.json())
            .then((data) => setNotes([...notes,data]))
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const deleteNote = (id:number)=>{
        fetch('http://localhost:8000/notes/'+ id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(() => getNotes())
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const editNote = (note:NotesI)=>{
        fetch('http://localhost:8000/notes/' + note.id, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        })
            .then(() => getNotes())
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const searchNote = (search:string)=>{
        fetch('http://localhost:8000/notes?q=' + search, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response=> response.json())
            .then(response=> setNotes(response))
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return <NotesContext.Provider value={{notes, getNotes,createNote,deleteNote,editNote,searchNote}}> {children}</NotesContext.Provider>
}
export default NotesProvider