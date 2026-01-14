import React, { useState } from "react";

export default function NotesBox({rating}) {
   const [notes, setNotes] = useState("")
    return (
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={4}
        className='movie-notes'
      />
    );
  }