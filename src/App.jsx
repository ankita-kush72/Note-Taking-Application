import  { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now(), timestamp: new Date().toISOString() }]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
    setEditingNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const notesPerPage = 10;
  const paginatedNotes = filteredNotes.slice((currentPage - 1) * notesPerPage, currentPage * notesPerPage);

  return (
    <div className="App">
      <h1>Note Taking Application</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <NoteList 
        notes={paginatedNotes}
        deleteNote={deleteNote}
        setEditingNote={setEditingNote}
      />
      <Pagination 
        totalNotes={filteredNotes.length}
        notesPerPage={notesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <NoteForm addNote={addNote} updateNote={updateNote} editingNote={editingNote} />
    </div>
  );
};

export default App;
