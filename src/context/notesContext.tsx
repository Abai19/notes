import React, {createContext, ReactNode, useEffect, useState} from 'react'
interface NotesI {
    id: number;
    title: string;
    description: string;
}
interface NotesS {
    title: string;
    description: string;
}

interface Props {
    children: React.ReactNode;
}
type NotesTypes= {
    notes: NotesI[];
    getNotes:()=> void;
    saveNote: (note:NotesS)=>void
}
export const NotesContext = createContext<NotesTypes>({notes:[], getNotes:()=>{},saveNote:(note:NotesS)=>{}});

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
    const saveNote = (note:NotesS)=>{
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
    return <NotesContext.Provider value={{notes, getNotes,saveNote}}> {children}</NotesContext.Provider>
}
export default NotesProvider