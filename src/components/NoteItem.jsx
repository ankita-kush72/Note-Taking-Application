import React from "react";
import { MdDelete,MdBrowserUpdated } from "react-icons/md";

const NoteItem = ({ note, deleteNote, openEditNote }) => {

  const colorCodes = [
    '#FFCDD2', '#BBDEFB', '#C8E6C9', '#FFE0B2', '#B2EBF2',
    '#F8BBD0', '#E1BEE7', '#D1C4E9', '#FFF9C4', '#DCEDC8'
  ];
  
 
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorCodes.length);
    return colorCodes[randomIndex];
  };

  return (
    <div className="notes-grid">
      <div className="note-card" data-color="yellow" style={{ backgroundColor: getRandomColor() }}>
        <h3>{note.title}</h3>
        <div className="edit-icon" onClick={() => openEditNote(note)}><MdBrowserUpdated /></div>
        <div className="delete-icon" onClick={() => deleteNote(note.id)} ><MdDelete /></div>

        <p className="content-data">{note.content}</p>
        <p className="datetime">
          <em>{new Date(note.timestamp).toLocaleString()}</em>
        </p>

      </div>
    </div>
  );
};

export default NoteItem;
