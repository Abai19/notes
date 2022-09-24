import React from 'react';
import './index.css';
import Layout from "./components/Layout";
import NotesProvider from "./context/notesContext";

function App() {
  return (
    <NotesProvider>
      <Layout/>
    </NotesProvider>
  );
}

export default App;
