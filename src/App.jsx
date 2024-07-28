import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import "./App.css";
import { MdAssignmentAdd,MdOutlineContentCut } from "react-icons/md";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingNote, setEditingNote] = useState(null);
  const [showAddForm, changeShowAddForm] = useState(false);



  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([
      ...notes,
      { ...note, id: Date.now(), timestamp: new Date().toISOString() },
    ]);
    changeShowAddForm(false);
  };

  const updateNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    changeShowAddForm(false);
    setEditingNote(null);
  };

  const openEditNote = (note) => {
    changeShowAddForm(true);
    setEditingNote(note);
  };

  const showAddNoteForm = () => {
    changeShowAddForm(!showAddForm);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const notesPerPage = 12;
  const paginatedNotes = filteredNotes.slice(
    (currentPage - 1) * notesPerPage,
    currentPage * notesPerPage
  );

  return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
          <button
            className="btn-color"
            alt="Plus icon"
            onClick={showAddNoteForm}
          >
            {showAddForm ? <MdOutlineContentCut /> : <MdAssignmentAdd />}
          </button>
        </div>
        <div className="content">
          {showAddForm ? (
            <NoteForm
              addNote={addNote}
              updateNote={updateNote}
              editingNote={editingNote}
            />
          ) : (
            <div>
              <SearchBar setSearchQuery={setSearchQuery} />

              <h1 className="note">Notes</h1>

              <NoteList
                notes={paginatedNotes}
                deleteNote={deleteNote}
                openEditNote={openEditNote}
              />
              <Pagination
                totalNotes={filteredNotes.length}
                notesPerPage={notesPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
