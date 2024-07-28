import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, deleteNote, openEditNote }) => {
  if (!Array.isArray(notes)) {
    return <div>Error: Notes should be an array.</div>;
  }

  return (
    <div className='node-list'>
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            openEditNote={openEditNote}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;

