import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";

function Dashboard() {
  const [notes, setNotes] =
    useState([]);

  const fetchNotes = async () => {
    const { data } =
      await API.get("/notes");

    setNotes(data);
  };

  useEffect(() => {
  const loadNotes = async () => {
    await fetchNotes();
  };

  loadNotes();
}, []);

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        <NoteForm
          refreshNotes={fetchNotes}
        />
<h2 className="text-2xl font-bold mb-4">
  My Notes
</h2>
        <NoteCard
          notes={notes}
          refreshNotes={fetchNotes}
        />
      </div>
    </>
  );
}

export default Dashboard;