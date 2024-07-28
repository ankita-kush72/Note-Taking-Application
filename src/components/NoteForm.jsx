import { useState, useEffect } from "react";

const NoteForm = ({ addNote, updateNote, editingNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    }
  }, [editingNote]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingNote) {
      updateNote({
        ...editingNote,
        title,
        content,
        timestamp: new Date().toISOString(),
      });
    } else {
      addNote({
        title,
        content,
        timestamp: new Date().toISOString(),
      });
    }
    setTitle("");
    setContent("");
  };

  return (
    <div className="form-div" id="NoteForm">
      <h2> Add Notes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        ></textarea>
        <button type="submit" className="saveNotesButton">
          {editingNote ? "Update Note" : "Add Note"}
        </button>
      
      </form>
    </div>
  );
};

export default NoteForm;
