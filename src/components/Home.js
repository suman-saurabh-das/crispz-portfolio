import React from 'react'

export default function Home() {
  return (
    <main className='font-Poppins'>
      <section className='bg-black text-white font-Poppins px-8 md:px-28 lg:px-32 xl:px-40'>

        <h1 className='font-bold text-3xl pt-20 pb-10 sm:pt-0'>crispz.eth()</h1>
        <div className='border-l-2 border-white pl-6 sm:flex'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae fugit dicta dolores, enim magnam cumque molestiae in, quo expedita iste doloremque fuga, excepturi nemo. Id, quibusdam.</p>
          <div className='flex justify-end'>
            <img className='w-48 sm:w-96' src="https://drive.google.com/uc?export=view&id=1afIBrKslQWsupFiUvg77UHI9j4Wk-aGc" alt="" />
          </div>
        </div>

        <h1 className='font-bold text-lg py-4 text-gray-400'>Currently()</h1>
        <div className='border-l-2 border-white pl-6 sm:flex'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam magni fuga accusantium, voluptatum in quae ut maiores similique, officia ratione, voluptatem ea neque mollitia necessitatibus facere.</p>
          <div className='flex justify-end'>
            <img className='w-48 sm:w-96' src="https://drive.google.com/uc?export=view&id=1QrRvFwnphW8HlWGME3cJFMOFqxQTdqm1" alt="" />
          </div>
        </div>

        <div className='py-10'>
          <button className='bg-blue-700 px-6 py-2 sm:px-8 sm:py-3 text-xl font-bold rounded-lg'>GM 🌈</button>
        </div>
      </section>
    </main>
  )
}
