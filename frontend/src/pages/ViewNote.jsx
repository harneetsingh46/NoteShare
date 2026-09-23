import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiClient from '../ApiClient/interceptor.js'

const ViewNote = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [note, setNote] = useState(null)
    const [loading, setLoading] = useState(true)

    const [isEditing, setIsEditing] = useState(false)
    const [saving, setSaving] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const [formData, setFormData] = useState({
        title: "",
        subject: "",
        semester: "",
        content: ""
    })


    // GET NOTE
    const getNote = async () => {
        try {

            const response = await apiClient.get(
                `/notes/getNote/${id}`
            )

            setNote(response.data.note)

            setFormData({
                title: response.data.note.title,
                subject: response.data.note.subject,
                semester: response.data.note.semester,
                content: response.data.note.content
            })

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
        getNote()
    }, [id])


    // HANDLE INPUT
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    // UPDATE NOTE
    const handleUpdate = async (e) => {

        e.preventDefault()

        try {

            setSaving(true)

            const response = await apiClient.put(
                `/notes/updateNote/${id}`,
                formData
            )

            setNote(response.data.note)

            setIsEditing(false)

        } catch (error) {

            console.log(
                error.response?.data?.message ||
                error.message
            )

        } finally {
            setSaving(false)
        }
    }


    // DELETE NOTE
    const handleDelete = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this note?"
        )

        if (!confirmDelete) return

        try {

            setDeleting(true)

            await apiClient.delete(
                `/notes/deleteNote/${id}`
            )

            navigate('/notes')

        } catch (error) {

            console.log(
                error.response?.data?.message ||
                error.message
            )

            setDeleting(false)
        }
    }


    // Loading
    if (loading) {
        return (
            <div className='min-h-screen bg-white text-black flex items-center justify-center'>

                <p className='text-sm text-gray-500 font-mono'>
                    Loading note...
                </p>

            </div>
        )
    }


    // Note not found
    if (!note) {
        return (
            <div className='min-h-screen bg-white text-black flex items-center justify-center px-6'>

                <div className='text-center'>

                    <h1 className='text-2xl font-semibold'>
                        Note not found
                    </h1>

                    <p className='text-gray-500 text-sm mt-2'>
                        The note you are looking for does not exist.
                    </p>

                    <button
                        onClick={() => navigate('/notes')}
                        className='mt-6 bg-black text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition'
                    >
                        Back to Notes
                    </button>

                </div>

            </div>
        )
    }


    return (
        <div className='min-h-screen bg-white text-black px-6 py-10'>

            <div className='max-w-4xl mx-auto'>


                {/* Back */}
                <button
                    onClick={() => navigate('/notes')}
                    className='text-sm text-gray-900 hover:text-black transition mb-8'
                >
                    ← Back to Notes
                </button>


                {/* Note Card */}
                <div className='border border-gray-400 bg-gray-300 rounded-2xl overflow-hidden shadow-sm'>


                    {/* Header */}
                    <div className='p-7 md:p-10 border-b border-gray-400'>

                        {!isEditing ? (

                            <>
                                {/* Subject + Semester */}
                                <div className='flex flex-wrap gap-3 mb-6'>

                                    <span className='text-xs uppercase tracking-wider border border-gray-400 bg-white rounded-full px-3 py-1.5 text-gray-900'>
                                        {note.subject}
                                    </span>

                                    <span className='text-xs uppercase tracking-wider border border-gray-400 bg-white rounded-full px-3 py-1.5 text-gray-900'>
                                        {note.semester}
                                    </span>

                                </div>


                                {/* Title */}
                                <h1 className='text-3xl md:text-5xl font-semibold tracking-tight leading-tight'>
                                    {note.title}
                                </h1>


                                {/* Date */}
                                <p className='text-sm text-gray-900 mt-5'>
                                    Shared on{' '}
                                    {new Date(note.createdAt).toLocaleDateString()}
                                </p>

                            </>

                        ) : (

                            /* EDIT HEADER */
                            <div className='space-y-5'>

                                <div className='grid md:grid-cols-2 gap-5'>

                                    {/* Subject */}
                                    <div>

                                        <label className='block text-sm font-medium mb-2'>
                                            Subject
                                        </label>

                                        <input
                                            type='text'
                                            name='subject'
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className='w-full border border-gray-400 bg-white rounded-lg px-4 py-3 outline-none focus:border-black transition'
                                        />

                                    </div>


                                    {/* Semester */}
                                    <div>

                                        <label className='block text-sm font-medium mb-2'>
                                            Semester
                                        </label>

                                        <input
                                            type='text'
                                            name='semester'
                                            value={formData.semester}
                                            onChange={handleChange}
                                            className='w-full border border-gray-400 bg-white rounded-lg px-4 py-3 outline-none focus:border-black transition'
                                        />

                                    </div>

                                </div>


                                {/* Title */}
                                <div>

                                    <label className='block text-sm font-medium mb-2'>
                                        Title
                                    </label>

                                    <input
                                        type='text'
                                        name='title'
                                        value={formData.title}
                                        onChange={handleChange}
                                        className='w-full border border-gray-400 bg-white rounded-lg px-4 py-3 outline-none focus:border-black transition'
                                    />

                                </div>

                            </div>

                        )}

                    </div>


                    {/* Content */}
                    <div className='p-7 md:p-10'>

                        <p className='text-xs uppercase tracking-[0.2em] text-gray-900 mb-5'>
                            Note Content
                        </p>


                        {!isEditing ? (

                            <div className='text-gray-900 leading-8 whitespace-pre-wrap text-[15px]'>
                                {note.content}
                            </div>

                        ) : (

                            <textarea
                                name='content'
                                value={formData.content}
                                onChange={handleChange}
                                rows='12'
                                className='w-full border border-gray-400 bg-white rounded-lg px-4 py-3 outline-none resize-none focus:border-black transition text-gray-900 leading-7'
                            />

                        )}

                    </div>


                    {/* Footer */}
                    <div className='px-7 md:px-10 py-5 bg-gray-50 border-t border-gray-400 flex flex-col md:flex-row items-center justify-between gap-4'>


                        {/* Brand */}
                        <span className='text-xs text-gray-900 font-mono'>
                            NoteShare
                        </span>


                        {/* Buttons */}
                        {!isEditing ? (

                            <div className='flex items-center gap-3'>

                                {/* Edit */}
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className='border border-black text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition'
                                >
                                    Edit
                                </button>


                                {/* Delete */}
                                <button
                                    onClick={handleDelete}
                                    disabled={deleting}
                                    className='bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition disabled:opacity-50'
                                >
                                    {deleting ? "Deleting..." : "Delete"}
                                </button>


                                {/* All Notes */}
                                <button
                                    onClick={() => navigate('/notes')}
                                    className='border border-black text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition'
                                >
                                    All Notes
                                </button>

                            </div>

                        ) : (

                            /* EDIT BUTTONS */
                            <div className='flex items-center gap-3'>

                                {/* Cancel */}
                                <button
                                    type='button'
                                    onClick={() => {

                                        setIsEditing(false)

                                        setFormData({
                                            title: note.title,
                                            subject: note.subject,
                                            semester: note.semester,
                                            content: note.content
                                        })

                                    }}
                                    className='border border-gray-400 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition'
                                >
                                    Cancel
                                </button>


                                {/* Save */}
                                <button
                                    onClick={handleUpdate}
                                    disabled={saving}
                                    className='bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition disabled:opacity-50'
                                >
                                    {saving ? "Saving..." : "Save Changes"}
                                </button>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewNote