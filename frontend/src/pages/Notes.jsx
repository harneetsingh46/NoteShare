import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiClient from "../ApiClient/interceptor.js"

const Notes = () => {

  const navigate = useNavigate()

  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState("")
  const [subjectFilter, setSubjectFilter] = useState("")
  const [semesterFilter, setSemesterFilter] = useState("")
  const [loading, setLoading] = useState(true)


  // GET NOTES
  const getNotes = async () => {

    try {

      setLoading(true)

      const response = await apiClient.get("notes/getNotes")

      setNotes(response.data.notes || [])

    } catch (error) {

      console.log(
        error.response?.data?.message ||
        error.message
      )

    } finally {

      setLoading(false)

    }

  }


  useEffect(() => {
    getNotes()
  }, [])


  // GET UNIQUE SUBJECTS
  const subjects = useMemo(() => {

    return [
      ...new Set(
        notes.map(note => note.subject)
      )
    ]

  }, [notes])


  // GET UNIQUE SEMESTERS
  const semesters = useMemo(() => {

    return [
      ...new Set(
        notes.map(note => note.semester)
      )
    ]

  }, [notes])


  // SEARCH + FILTER
  const filteredNotes = useMemo(() => {

    return notes.filter((note) => {

      const searchText = search.toLowerCase().trim()

      const matchesSearch =
        note.title?.toLowerCase().includes(searchText) ||
        note.subject?.toLowerCase().includes(searchText) ||
        note.content?.toLowerCase().includes(searchText)

      const matchesSubject =
        subjectFilter === "" ||
        note.subject === subjectFilter

      const matchesSemester =
        semesterFilter === "" ||
        note.semester === semesterFilter

      return (
        matchesSearch &&
        matchesSubject &&
        matchesSemester
      )

    })

  }, [
    notes,
    search,
    subjectFilter,
    semesterFilter
  ])


  // CLEAR FILTERS
  const clearFilters = () => {

    setSearch("")
    setSubjectFilter("")
    setSemesterFilter("")

  }


  return (

    <div className='min-h-screen bg-white text-black px-6 py-10'>

      <div className='max-w-6xl mx-auto'>


        {/* Header */}
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10'>

          <div>

            <p className='text-xs uppercase tracking-[0.2em] text-black'>
              NoteShare
            </p>

            <h1 className='text-4xl md:text-5xl font-semibold tracking-tight mt-2'>
              Notes
            </h1>

            <p className='text-gray-900 mt-3'>
              Explore notes shared by students.
            </p>

          </div>


          {/* Create Note */}
          <button
            onClick={() => navigate("/createNote")}
            className='bg-black text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition duration-200'
          >
            + Create Note
          </button>

        </div>


        {/* SEARCH + FILTERS */}
        <div className='bg-gray-300 rounded-2xl p-5 mb-10'>

          <div className='grid md:grid-cols-3 gap-4'>


            {/* Search */}
            <div>

              <label className='block text-xs font-medium uppercase tracking-wider mb-2'>
                Search Notes
              </label>

              <input
                type='text'
                placeholder='Search by title, subject or content...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-full bg-white border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black transition'
              />

            </div>


            {/* Subject */}
            <div>

              <label className='block text-xs font-medium uppercase tracking-wider mb-2'>
                Subject
              </label>

              <select
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className='w-full bg-white border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black transition'
              >

                <option value=''>
                  All Subjects
                </option>

                {subjects.map((subject) => (

                  <option
                    key={subject}
                    value={subject}
                  >
                    {subject}
                  </option>

                ))}

              </select>

            </div>


            {/* Semester */}
            <div>

              <label className='block text-xs font-medium uppercase tracking-wider mb-2'>
                Semester
              </label>

              <select
                value={semesterFilter}
                onChange={(e) => setSemesterFilter(e.target.value)}
                className='w-full bg-white border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black transition'
              >

                <option value=''>
                  All Semesters
                </option>

                {semesters.map((semester) => (

                  <option
                    key={semester}
                    value={semester}
                  >
                    {semester}
                  </option>

                ))}

              </select>

            </div>

          </div>


          {/* Search Result Info */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5'>

            <p className='text-sm text-gray-800'>

              {filteredNotes.length} note
              {filteredNotes.length !== 1 && "s"} found

            </p>


            {(search || subjectFilter || semesterFilter) && (

              <button
                onClick={clearFilters}
                className='text-sm font-medium underline underline-offset-4 hover:text-gray-600 transition'
              >
                Clear filters
              </button>

            )}

          </div>

        </div>


        {/* Loading */}
        {loading && (

          <div className='flex justify-center py-20'>

            <p className='text-sm text-gray-500 font-mono'>
              Loading notes...
            </p>

          </div>

        )}


        {/* Empty State */}
        {!loading && filteredNotes.length === 0 && (

          <div className='border border-gray-200 rounded-xl py-20 text-center'>

            <div className='w-12 h-12 border border-black rounded-full flex items-center justify-center mx-auto text-xl'>
              +
            </div>

            <h2 className='text-xl font-semibold mt-5'>
              No notes found
            </h2>

            <p className='text-gray-500 text-sm mt-2'>
              Try changing your search or filters.
            </p>


            {(search || subjectFilter || semesterFilter) ? (

              <button
                onClick={clearFilters}
                className='mt-6 border border-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition'
              >
                Clear filters
              </button>

            ) : (

              <button
                onClick={() => navigate("/create-note")}
                className='mt-6 border border-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition'
              >
                Create your first note
              </button>

            )}

          </div>

        )}


        {/* Notes */}
        {!loading && filteredNotes.length > 0 && (

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>

            {filteredNotes.map((note) => (

              <div
                key={note._id}
                className='group bg-gray-300 text-black rounded-2xl p-8 min-h-[250px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'
              >


                {/* Subject + Semester */}
                <div className='flex items-center justify-between gap-3'>

                  <span className='text-xs font-medium uppercase tracking-wider bg-black text-white px-3 py-1.5 rounded-full'>
                    {note.subject}
                  </span>

                  <span className='text-xs text-black'>
                    {note.semester}
                  </span>

                </div>


                {/* Title */}
                <h2 className='text-xl font-semibold mt-6 group-hover:underline underline-offset-4'>
                  {note.title}
                </h2>


                {/* Content */}
                <p className='text-black text-sm leading-relaxed mt-3 line-clamp-4'>
                  {note.content}
                </p>


                {/* Bottom */}
                <div className='flex items-center justify-between mt-6 pt-4 border-t border-black'>

                  <span className='text-xs text-black'>
                    Shared note
                  </span>

                  <button
                    onClick={() => navigate(`/notes/${note._id}`)}
                    className='text-sm font-medium hover:underline underline-offset-4'
                  >
                    View →
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  )
}

export default Notes