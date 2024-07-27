import React from 'react';

const NoteItem = ({ note, deleteNote, setEditingNote }) => {
  return (
    <div className="note-item">
      <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <p><em>{new Date(note.timestamp).toLocaleString()}</em></p>
      </div>
      <div>
        <button onClick={() => setEditingNote(note)}>Edit</button>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
