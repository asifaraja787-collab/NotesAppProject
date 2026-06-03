// import { useState } from "react";
// import API from "../api/axios";

// function NoteForm({ refreshNotes }) {
//   const [title, setTitle] =
//     useState("");

//   const [content, setContent] =
//     useState("");

//   const [image, setImage] =
//     useState(null);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const formData =
//         new FormData();

//       formData.append(
//         "title",
//         title
//       );

//       formData.append(
//         "content",
//         content
//       );

//       if (image) {
//         formData.append(
//           "image",
//           image
//         );
//       }

//       await API.post(
//         "/notes",
//         formData
//       );

//       setTitle("");
//       setContent("");
//       setImage(null);

//       refreshNotes();
//     } catch (error) {
//       console.log(
//         error.response?.data
//       );
//     }
//   };

//   return (
//     <form
//       onSubmit={submitHandler}
//       className="bg-white p-4 rounded-xl shadow mb-6"
//     >
//       <input
//         type="text"
//         placeholder="Title"
//         className="border p-2 w-full mb-2"
//         value={title}
//         onChange={(e) =>
//           setTitle(
//             e.target.value
//           )
//         }
//       />

//       <textarea
//         placeholder="Description"
//         className="border p-2 w-full mb-2"
//         value={content}
//         onChange={(e) =>
//           setContent(
//             e.target.value
//           )
//         }
//       />

//       <input
//         type="file"
//         className="mb-2"
//         onChange={(e) =>
//           setImage(
//             e.target.files[0]
//           )
//         }
//       />

//       <button
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Create Note
//       </button>
//     </form>
//   );
// }

// export default NoteForm;
import { useState } from "react";
import API from "../api/axios";

function NoteForm({ refreshNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] =
    useState("");

  const [image, setImage] =
    useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData =
        new FormData();

      formData.append(
        "title",
        title
      );

      formData.append(
        "content",
        content
      );

      if (image) {
        formData.append(
          "image",
          image
        );
      }

      await API.post(
        "/notes",
        formData
      );

      setTitle("");
      setContent("");
      setImage(null);

      refreshNotes();
    } catch (error) {
      console.log(
        error.response?.data
      );
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-4 rounded shadow mb-4"
    >
      <h2 className="text-xl font-bold mb-4">
        Add Note
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="border p-2 w-full mb-2"
        required
      />

      <textarea
        placeholder="Description"
        value={content}
        onChange={(e) =>
          setContent(
            e.target.value
          )
        }
        className="border p-2 w-full mb-2"
        rows="4"
        required
      />

      <input
        type="file"
        onChange={(e) =>
          setImage(
            e.target.files[0]
          )
        }
        className="mb-2"
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Note
      </button>
    </form>
  );
}

export default NoteForm;