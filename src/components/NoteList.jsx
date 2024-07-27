import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, deleteNote, setEditingNote }) => {
  if (!Array.isArray(notes)) {
    return <div>Error: Notes should be an array.</div>;
  }

  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            setEditingNote={setEditingNote}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;

