import React from 'react'

export default function Home() {
  function gmMessage() {
    
  }

  return (
    <main className='font-Poppins'>
      <section className='bg-black text-white font-Poppins px-8 md:px-28 lg:px-32 xl:px-40 overflow-hidden'>

        <h1 className='font-bold text-3xl sm:text-6xl pt-20 pb-10 sm:pt-0'>crispz.eth()</h1>
        <div className='border-l-2 border-white pl-6 sm:flex justify-around'>
          <p className='sm:w-3/5'>Highly into design systems, web3, user/dev experience and under engineering. I play video games in free times. I’m currently working on a project called VALORANT Store checker, where players can check their in game store without even opening the game.<br /><br />
            <span className='font-bold text-xl'>Interest</span>
            <br /><br />
            <ul>
              <li>Decentralised Network system</li>
              <li>Blockchain</li>
              <li>Autonomous system</li>
            </ul>
          </p>
          <div className='flex justify-end sm:w-2/5'>
          <img className='w-48 lg:w-72 object-cover relative -right-16 sm:right-0' src="https://drive.google.com/uc?export=view&id=1afIBrKslQWsupFiUvg77UHI9j4Wk-aGc" alt="" />
          </div>
        </div>

        <h1 className='font-bold text-lg py-4 text-gray-400'>Currently operating @ Web3 Bharat()</h1>
        <div className='border-l-2 border-white pl-6 sm:flex justify-around'>
          <p className='sm:w-3/5'>Web3 Bharat is a Phygital community that is bringing together curious minds pan India to spread awareness around Web3. The objective is to setup a Web3 ecosystem. We are strategically driving this  adoption by creating a network of Web3 creators and consumers.</p>
          <div className=' flex justify-end sm:w-2/5'>
            <img className='w-48 lg:w-64 object-cover relative -right-16 sm:right-0' src="https://drive.google.com/uc?export=view&id=1QrRvFwnphW8HlWGME3cJFMOFqxQTdqm1" alt="" />
          </div>
        </div>

        <div className='py-10'>
          <button className='bg-blue-700 hover:bg-purple-600 transition-colors duration-500 px-6 py-2 sm:px-8 sm:py-3 text-xl font-bold rounded-lg' onClick={gmMessage}>GM 🌈</button>
        </div>

        <div className='fixed z-30 bottom-6 right-6 sm:bottom-6 sm:right-6'>
          <a href='#home' className='bg-blue-700 hover:bg-purple-600  transition-colors duration-500 text-xl px-3 py-1 sm:px-5 sm:py-3 aspect-square text-white font-bold rounded-xl'><i className="fa-solid fa-arrow-up"></i></a>
        </div>
      </section>
    </main>
  )
}
