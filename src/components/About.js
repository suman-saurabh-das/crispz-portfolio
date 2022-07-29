import React from 'react'

export default function About() {
  return (
    <main id='about'>
      <section className='font-Poppins px-8 md:px-28 lg:px-32 xl:px-40'>
        <h1 className='font-bold text-3xl pt-20 pb-10'>&lt;/About me&gt;</h1>

        <h2 className='font-bold text-2xl text-gray-600'>Hello</h2>
        <div className='border-l-2 border-gray-300 pl-6'>
        <p>I am Crispz,  a university student highly interested in design system, Web3, blockchain and user/developer experience. I like to study about Decentralised storage, play-to-earn and traditional game mechanism. Oh, sometimes i do UI design for websites.</p>
        </div>
        <div className='pt-12 relative -left-20 sm:-left-0'>
            <img className='w-48 sm:w-60' src="https://drive.google.com/uc?export=view&id=1JApg5e1QntQcyS0TgfDFka857RWK_OrZ" alt="" />
        </div>
      </section>
    </main>
  )
}
