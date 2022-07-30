import React from 'react'

export default function Contact() {
    return (
        <main id='contact'>
            <section className='bg-black text-white font-Poppins px-8 md:px-28 lg:px-32 xl:px-40 pb-10'>
                <h1 className='font-bold text-3xl pt-20 pb-10'>&lt;Contact Me/&gt;</h1>
                <div className=''>
                    <div>
                        <h2 className='font-bold text-2xl text-gray-400'>Hi there !</h2>
                        <form className='border-l-2 border-gray-300 pl-6'>
                            <div className='max-w-lg py-6'>
                                <input className='w-full p-3 text-black' type="text" placeholder='Your name' />
                            </div>
                            <div className='max-w-lg py-6'>
                                <input className='w-full p-3 text-black' type="text" placeholder='Your mail id' />
                            </div>
                            <div className='max-w-lg py-6'>
                                <textarea className='w-full p-3 text-black' name="" id="" rows="5" placeholder='Say Hi !'></textarea>
                            </div>
                            <div>
                                <a className='bg-blue-700 hover:bg-purple-600 transition-colors duration-500 px-6 py-1 sm:px-8 sm:py-3 text-xl font-bold rounded-lg' href='mailto:crispzeth@gmail.com' type='submit'>SEND 🎁</a>
                            </div>
                        </form>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </section>
        </main>
    )
}
