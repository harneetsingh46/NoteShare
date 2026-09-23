import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiClient from '../ApiClient/interceptor.js'

const CreateNote = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: "",
        subject: "",
        semester: "",
        content: ""
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (loading) return

        try {

            setLoading(true)
            setError("")

            const response = await apiClient.post(
                "/notes/add-note",
                formData
            )

            console.log(response.data)

            setFormData({
                title: "",
                subject: "",
                semester: "",
                content: ""
            })

            navigate("/notes")

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Something went wrong while creating the note."
            )

            console.log(
                error.response?.data?.message ||
                error.message
            )

        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='min-h-screen bg-white text-black px-6 py-10'>

            <div className='max-w-3xl mx-auto'>

                {/* Header */}
                <div className='mb-10'>

                    <p className='text-xs uppercase tracking-[0.2em] text-gray-900'>
                        NoteShare
                    </p>

                    <h1 className='text-4xl font-semibold mt-2'>
                        Create Note
                    </h1>

                    <p className='text-gray-500 mt-2'>
                        Share your study material with other students.
                    </p>

                </div>


                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className='border border-gray-500 rounded-xl p-6 md:p-8 space-y-6'
                >

                    {/* Error */}
                    {error && (
                        <div className='border border-red-200 bg-red-50 text-red-600 rounded-lg px-4 py-3 text-sm'>
                            {error}
                        </div>
                    )}


                    {/* Title */}
                    <div>

                        <label className='block text-sm font-medium mb-2'>
                            Note Title
                        </label>

                        <input
                            type='text'
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                            placeholder='e.g. Binary Search Notes'
                            className='w-full border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-black transition'
                            required
                        />

                    </div>


                    {/* Subject + Semester */}
                    <div className='grid md:grid-cols-2 gap-5'>

                        <div>

                            <label className='block text-sm font-medium mb-2'>
                                Subject
                            </label>

                            <input
                                type='text'
                                name='subject'
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder='e.g. Data Structures'
                                className='w-full border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-black transition'
                                required
                            />

                        </div>


                        <div>

                            <label className='block text-sm font-medium mb-2'>
                                Semester
                            </label>

                            <select
                                name='semester'
                                value={formData.semester}
                                onChange={handleChange}
                                className='w-full border border-gray-500 rounded-lg px-4 py-3 outline-none bg-white focus:border-black transition'
                                required
                            >
                                <option value='' disabled>
                                    Select semester
                                </option>

                                <option value='1st Semester'>
                                    1st Semester
                                </option>

                                <option value='2nd Semester'>
                                    2nd Semester
                                </option>

                                <option value='3rd Semester'>
                                    3rd Semester
                                </option>

                                <option value='4th Semester'>
                                    4th Semester
                                </option>

                                <option value='5th Semester'>
                                    5th Semester
                                </option>

                                <option value='6th Semester'>
                                    6th Semester
                                </option>

                                <option value='7th Semester'>
                                    7th Semester
                                </option>

                                <option value='8th Semester'>
                                    8th Semester
                                </option>

                            </select>

                        </div>

                    </div>


                    {/* Content */}
                    <div>

                        <label className='block text-sm font-medium mb-2'>
                            Content
                        </label>

                        <textarea
                            name='content'
                            value={formData.content}
                            onChange={handleChange}
                            placeholder='Write your notes here...'
                            rows='12'
                            className='w-full border border-gray-500 rounded-lg px-4 py-3 outline-none resize-none focus:border-black transition'
                            required
                        />

                        <p className='text-xs text-gray-900 mt-2'>
                            Keep your notes clear and easy for other students to understand.
                        </p>

                    </div>


                    {/* Buttons */}
                    <div className='flex justify-end gap-3 pt-2'>

                        <button
                            type='button'
                            onClick={() => navigate("/notes")}
                            disabled={loading}
                            className='border border-gray-500 px-5 py-3 rounded-lg text-sm font-medium hover:border-black transition disabled:opacity-50'
                        >
                            Cancel
                        </button>

                        <button
                            type='submit'
                            disabled={loading}
                            className='bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {loading ? "Creating..." : "Create Note"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default CreateNote