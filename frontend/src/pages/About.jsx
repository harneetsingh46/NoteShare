import React from 'react'

const About = () => {
    return (
        <div className='min-h-screen bg-white text-black font-mono'>

            {/* Main */}
            <main className='max-w-6xl mx-auto px-6 lg:px-8 py-20'>

                {/* Heading */}
                <section className='max-w-3xl'>

                    <p className='text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-5'>
                        About NoteShare
                    </p>

                    <h1 className='text-5xl md:text-6xl font-semibold tracking-tight leading-tight'>
                        Notes made
                        <br />
                        easier to share.
                    </h1>

                    <p className='text-lg text-gray-500 leading-relaxed mt-7 max-w-2xl'>
                        NoteShare is a simple platform where students can
                        share, discover, and organize study notes in one place.
                    </p>

                </section>


                {/* Divider */}
                <div className='border-t border-gray-900 my-20'></div>


                {/* What we do */}
                <section className='grid md:grid-cols-3 gap-5'>

                    <div className='bg-black text-white rounded-2xl p-8 border border-black hover:bg-gray-900 hover:border-gray-700 hover:-translate-y-2 transition-all duration-300 cursor-default'>

                        <span className='text-sm text-gray-500'>
                            01
                        </span>

                        <h2 className='text-xl font-semibold mt-4'>
                            Share
                        </h2>

                        <p className='text-gray-400 text-sm leading-relaxed mt-3'>
                            Share your notes with classmates and make
                            useful study material easier to access.
                        </p>

                    </div>


                    <div className='bg-black text-white rounded-2xl p-8 border border-black hover:bg-gray-900 hover:border-gray-700 hover:-translate-y-2 transition-all duration-300 cursor-default'>

                        <span className='text-sm text-gray-500'>
                            02
                        </span>

                        <h2 className='text-xl font-semibold mt-4'>
                            Discover
                        </h2>

                        <p className='text-gray-400 text-sm leading-relaxed mt-3'>
                            Find notes from other students and explore
                            material that can help with your studies.
                        </p>

                    </div>


                    <div className='bg-black text-white rounded-2xl p-8 border border-black hover:bg-gray-900 hover:border-gray-700 hover:-translate-y-2 transition-all duration-300 cursor-default'>

                        <span className='text-sm text-gray-500'>
                            03
                        </span>

                        <h2 className='text-xl font-semibold mt-4'>
                            Learn
                        </h2>

                        <p className='text-gray-400 text-sm leading-relaxed mt-3'>
                            Keep useful resources together and make
                            studying a little more organized.
                        </p>

                    </div>

                </section>


                {/* Philosophy */}
                <section className='mt-24 bg-black text-white rounded-2xl p-10 md:p-14'>

                    <div className='max-w-3xl'>

                        <p className='text-xs tracking-[0.25em] uppercase text-gray-500'>
                            Our idea
                        </p>

                        <h2 className='text-3xl md:text-4xl font-semibold mt-5 leading-tight'>
                            Good notes are better
                            <br />
                            when they're shared.
                        </h2>

                        <p className='text-gray-400 mt-5 leading-relaxed max-w-xl'>
                            NoteShare is built around a simple idea:
                            students should be able to learn from each other
                            and make useful knowledge easier to find.
                        </p>

                    </div>

                </section>


                {/* Bottom */}
                <section className='flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-20'>

                    <div>
                        <h2 className='text-xl font-semibold'>
                            Learn. Share. Grow.
                        </h2>

                        <p className='text-sm text-gray-500 mt-2'>
                            Built for students, by students.
                        </p>
                    </div>

                    <div className='text-xs text-gray-900 tracking-[0.2em] uppercase'>
                        NoteShare
                    </div>

                </section>

            </main>

        </div>
    )
}

export default About