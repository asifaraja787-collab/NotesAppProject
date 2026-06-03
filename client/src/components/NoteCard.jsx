import { useState } from "react";
import API from "../api/axios";

function NoteCard({
  notes,
  refreshNotes,
}) {
  const [editingId, setEditingId] =
    useState(null);

  const [updatedTitle,
    setUpdatedTitle] = useState("");

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);

    refreshNotes();
  };

  const updateNote = async (id) => {
    await API.put(`/notes/${id}`, {
      title: updatedTitle,
    });

    setEditingId(null);

    refreshNotes();
  };

  return (
    <div className="space-y-4">
      {notes?.map((note) => (
        <div
          key={note._id}
          className="bg-white p-4 rounded shadow"
        >
          {editingId === note._id ? (
            <>
              <input
                className="border p-2 w-full"
                value={updatedTitle}
                onChange={(e) =>
                  setUpdatedTitle(
                    e.target.value
                  )
                }
              />

              <button
                onClick={() =>
                  updateNote(note._id)
                }
                className="bg-green-500 text-white px-3 py-1 mt-2 rounded"
              >
                Save
              </button>
            </>
          ) : (
            <>
           <h2 className="font-bold text-xl">
  {note.title}
</h2>

<p className="text-gray-600 mt-2">
  {note.content}
</p>

              {note.image && (
                <img
                  src={note.image}
                  alt={note.title}
      className="w-full h-48 object-cover rounded-lg mb-3"
                  // alt=""
                  // className="w-40 mt-2"
                />
              )}

              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => {
                    setEditingId(
                      note._id
                    );

                    setUpdatedTitle(
                      note.title
                    );
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteNote(note._id)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default NoteCard;