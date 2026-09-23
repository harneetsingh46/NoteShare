import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../ApiClient/interceptor.js";

const MyNotes = () => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const getMyNotes = async () => {
    try {
      setLoading(true);

      const response = await apiClient.get("/notes/my-notes");

      setNotes(response.data.notes || []);
    } catch (error) {
      console.log(
        error.response?.data?.message ||
        error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMyNotes();
  }, []);

  // SEARCH
  const filteredNotes = notes.filter((note) => {
    const searchText = search.toLowerCase();

    return (
      note.title?.toLowerCase().includes(searchText) ||
      note.subject?.toLowerCase().includes(searchText) ||
      note.semester?.toLowerCase().includes(searchText) ||
      note.content?.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-black">
              NoteShare
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-2">
              My Notes
            </h1>

            <p className="text-gray-900 mt-3">
              Manage the notes you have shared with other students.
            </p>

          </div>


          {/* CREATE NOTE */}
          <button
            onClick={() => navigate("/createNote")}
            className="bg-black text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition duration-200"
          >
            + Create Note
          </button>

        </div>


        {/* SEARCH */}
        <div className="mb-10">

          <input
            type="text"
            placeholder="Search your notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-300 border border-gray-400 rounded-xl px-5 py-4 text-black outline-none focus:border-black transition"
          />

        </div>


        {/* LOADING */}
        {loading && (

          <div className="flex justify-center py-20">

            <p className="text-sm text-gray-500 font-mono">
              Loading your notes...
            </p>

          </div>

        )}


        {/* EMPTY */}
        {!loading && filteredNotes.length === 0 && (

          <div className="border border-gray-300 bg-gray-300 rounded-2xl py-20 text-center">

            <div className="w-12 h-12 border border-black rounded-full flex items-center justify-center mx-auto text-xl">
              +
            </div>

            <h2 className="text-xl font-semibold mt-5">
              {search ? "No notes found" : "You haven't created any notes"}
            </h2>

            <p className="text-gray-700 text-sm mt-2">
              {search
                ? "Try searching with a different keyword."
                : "Start sharing your study material with other students."
              }
            </p>

            {!search && (
              <button
                onClick={() => navigate("/create-note")}
                className="mt-6 border border-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition"
              >
                Create your first note
              </button>
            )}

          </div>

        )}


        {/* NOTES */}
        {!loading && filteredNotes.length > 0 && (

          <>

            {/* RESULT COUNT */}
            <div className="mb-5">

              <p className="text-sm text-gray-700">
                {filteredNotes.length} note
                {filteredNotes.length !== 1 ? "s" : ""}
              </p>

            </div>


            {/* CARDS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {filteredNotes.map((note) => (

                <div
                  key={note._id}
                  className="group bg-gray-300 text-black rounded-2xl p-8 min-h-[250px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >

                  {/* SUBJECT + SEMESTER */}
                  <div className="flex items-center justify-between gap-3">

                    <span className="text-xs font-medium uppercase tracking-wider bg-black text-white px-3 py-1.5 rounded-full">
                      {note.subject}
                    </span>

                    <span className="text-xs text-black">
                      {note.semester}
                    </span>

                  </div>


                  {/* TITLE */}
                  <h2 className="text-xl font-semibold mt-6 group-hover:underline underline-offset-4">
                    {note.title}
                  </h2>


                  {/* CONTENT */}
                  <p className="text-black text-sm leading-relaxed mt-3 line-clamp-4">
                    {note.content}
                  </p>


                  {/* BOTTOM */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-black">

                    <span className="text-xs text-black">
                      {new Date(note.createdAt).toLocaleDateString()}
                    </span>

                    <button
                      onClick={() => navigate(`/notes/${note._id}`)}
                      className="text-sm font-medium hover:underline underline-offset-4"
                    >
                      View →
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </>

        )}

      </div>

    </div>
  );
};

export default MyNotes;